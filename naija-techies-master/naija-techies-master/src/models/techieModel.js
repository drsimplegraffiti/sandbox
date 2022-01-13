const mongoose = require('mongoose');
const { Schema } = mongoose;
const validator = require('validator');


const techieSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: [true, 'A name is required'],
        minlenght: [10, 'A user must have more or equal than 10 characters'],
        maxlenght: [40, 'A user must have less or equal than 40 characters'],
    },
    username: {
        type: String,
        required: [true, 'A name is required'],
        minlenght: [10, 'A user must have more or equal than 10 characters'],
        maxlenght: [40, 'A user must have less or equal than 40 characters'],
        unique: true
    },
    category: {
        type: [String],
        enum: {
            values: ["web development", "Ios Development", "mobile development", "Machine Learning", "Artificial Intelligence"],
            message: 'Category is either: web development, Ios development, mobile development, machine learning, artificial initelligence',
            // default:'web development'
        }
    },

    stack: {
        type: String,
        required: [true, 'Please enter your stack here...']

    },
    serviceProvided: {
        type: String,
        required: [true, 'Please enter the service you render here...']

    },
    location: {
        type: String,
        required: [true, 'Please input your location here...']

    },
    alias: {
        type: String,
        required: [true, 'Please enter your code name here...']
    },
    email: {
        type: String,
        required: [true, 'Please enter a valid email to proceed']
    },
    twitterHandle: {
        type: String,
        required: [true, 'Please enter a valid twitter name to proceed'],
    },
    githubLink: {
        type: String,
        required: [true, 'Please enter a valid twitter name to proceed'],
        validate: [validator.isURL, 'please enter a valid github link']
    },
    websiteUrl: {
        type: String,
        required: [true, 'Please enter a valid twitter name to proceed'],
        validate: [validator.isURL, 'please enter a valid URL']

    },
    phoneNumber: {
        type: String,
        required: [true, 'A techie must have a valid phone Number'],
        min: [11, 'Phone Number must be above 11 integers'],
        max: [13, 'Phone Number must be below 13 integers'],
        validate: [validator.isMobilePhone, 'please enter a valid phone number']
    }
}, {

    timestamps: true
})


// Exports schemas
module.exports = mongoose.model("Techie", techieSchema);