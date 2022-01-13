const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { registerValidation, loginValidation } = require('../validation');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
  const validation= registerValidation(req.body);
  if (validation.error) return res.status(400).json({ message: validation.error.details[0].message });

//Check if user exists
  const checkUser = await User.findOne({ email: req.body.email });
  if (checkUser) return res.status(400).json({
    message: 'email exist already'
  });

  //Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);


  // Create a new user
  const user = new User({
    name:req.body.name,
    email:req.body.email,
    password: hashedPassword
  })


  try {
    const savedUser = await user.save();
    return res.status(200).json({
      data: savedUser
    })
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong"
    })
  }
});


router.post('/login', async(req, res) => {
  const validation = loginValidation(req.body);
  if (validation.error) return res.status(400).json({ message: validation.error.details[0].message });

  //Check if user exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json({
    message: 'email or password does not exist'
  });

  //check if password is correct
  const validPassword = bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).json({
    message: "invalid password"
  });

  //Creating token
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  res.header('auth-token', token)

  return res.status(200).json({
    message: 'success',
    authToken:token
  })

});
module.exports = router;