const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const validateRegisterInput = require('../validation/registerValidation');
const jwt = require('jsonwebtoken');
const requireAuth = require('../middleware/permissions');


// @route GET /api/auth/test
// @desc Test the auth route
// @access Public 
router.get('/test', (req, res) => {
    return res.send('auth route working');
});


// @route POST /api/auth/register
// @desc Create a new user
// @access Public 
router.post('/register', async(req, res) => {
    try {
        //validate req.body
        const { errors, isValid } = validateRegisterInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }
        //check for existing users
        const existingEmail = await User.findOne({
            email: new RegExp("^" + req.body.email + "$", "i") //this takes care of lower case and uppercase conflicts
        });
        if (existingEmail) {
            return res.status(400).json({ error: 'There is already a user with this email' })
        }

        //hash password
        const hashedPassword = await bcrypt.hash(req.body.password, 12);

        //create a new user
        const newUser = new User({
                email: req.body.email,
                password: hashedPassword,
                name: req.body.name
            })
            //save user to db
        const savedUser = await newUser.save();
        const payload = { userId: savedUser._id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '7d'
        });

        res.cookie('access-token', token, {
            expires: new Date(Date.now() * 7 * 24 * 60 * 60 * 1000), //i.e 7days in mill seconds
            httpOnly: true, //can only be accessed by http servers and not from the front end
            secure: process.env.NODE_ENV === 'production' // i.e if we are in production make sure the secure is true

        });
        //removed password and return data securely
        const userToReturn = {...savedUser._doc };
        delete userToReturn.password;

        return res.status(201).json(userToReturn);
    } catch (err) {
        //catch error here
        console.log(err.message)
    }
});

// @route POST /api/auth/login
// @desc Login user and return access token
// @access Public
router.post('/login', async(req, res) => {
    try {
        //check for the user
        const user = await User.findOne({
            email: new RegExp("^" + req.body.email + "$", "i") //this takes care of lower case and uppercase conflicts
        })
        if (!user) {
            return res
                .status(400)
                .json({ error: 'There is a problem with your login credentials' }); //always send a generic message
        }

        const passwordMatch = await bcrypt.compare(
            req.body.password,
            user.password);
        if (!passwordMatch) {
            return res
                .status(400)
                .json({ error: 'There is a problem with your login credentials' }); //always send a generic message
        }
        const payload = { userId: user._id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '7d'
        });

        res.cookie('access-token', token, {
            expires: new Date(Date.now() * 7 * 24 * 60 * 60 * 1000), //i.e 7days in mill seconds
            httpOnly: true, //can only be accessed by http servers and not from the front end
            secure: process.env.NODE_ENV === 'production' // i.e if we are in production make sure the secure is true

        });
        const userToReturn = {...user._doc };
        delete userToReturn.password;
        return res.status(200).json({
                token: token,
                user: userToReturn
            })
            // return res.json({ passwordMatch: passwordMatch })
    } catch (err) {
        console.log(err);
        return res.status(500).json(err.message)
    }
})



// @route GET /api/auth/current
// @desc Return the current authorized user
// @access Private 
router.get('/current', requireAuth, (req, res) => {
    if (!req.user) {
        return res.status(401).json('Unauthorized')
    }
    return res.json(req.user)
})


// @route   PUT /api/auth/logout
// @desc    Logout user a clear the cookie
// @access  Private
router.put("/logout", requireAuth, async(req, res) => {
    try {
        res.clearCookie("access-token");

        return res.json({ success: true });
    } catch (err) {
        console.log(err);
        return res.status(500).send(err.message);
    }
});
module.exports = router;