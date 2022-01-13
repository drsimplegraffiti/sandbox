const express = require('express')
const session = require('express-session')
const router = express.Router()
const { addUser } = require('../modules/users/service/userService')
const { registerSchema } = require('../modules/users/validations/authValidation')
const { joiErrorFormatter, mongooseErrorFormatter } = require('../utils/validationFormatter')
const passport = require('passport')
const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')

/**
 *  Shows user registration
 */
router.get('/register', guestMiddleware, (req, res) => {
    return res.render('register')
})

/**
 *  Handles user registration
 */
router.post('/register', guestMiddleware, async(req, res) => {
    try {
        const validationResult = registerSchema.validate(req.body, {
            abortEarly: false
        })
        if (validationResult.error) {
            return res.render('register', {
                message: {
                    type: 'error',
                    body: 'validation Errors '
                },
                errors: joiErrorFormatter(validationResult.error),
                formData: req.body
            })
        }
        const user = await addUser(req.body)
        return res.render('register', {
            message: {
                type: 'success',
                body: 'Registration successful'
            },
            formData: req.body
        })
    } catch (error) {
        console.error(error)
        return res.status(400).render('register', {
            message: {
                type: 'error',
                body: 'validation Errors '
            },
            errors: mongooseErrorFormatter(error),
            formData: req.body
        })
    }
})

/**
 *  Shows user login
 */
router.get('/login', guestMiddleware, (req, res) => {
    return res.render('login')
})

/**
 *  logs in user
 */
router.post('/login', guestMiddleware, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}), (req, res) => {
    return res.render('login', {
        message: {
            type: 'success',
            body: 'Login successful'
        }
    })
})


/**
 * Logs out a user
 */
router.get('/logout', authMiddleware, (req, res) => {
    req.logout()
    res.redirect('/')
})

/**
 * Logs out a user
 */
router.post('/logout', (req, res) => {

})
module.exports = router