const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const { isEmail } = require('validator');


// required: true to be used with oauth20
//required: true to be used with oauth20

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        enum: ['admin', 'tutor', 'students'],
        default: 'admin',
        type: String,
    },
    isTutor: {
        type: Boolean,
        default: false
    },
    isAdmin:{
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('User', UserSchema);

module.exports = User;