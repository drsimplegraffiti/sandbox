const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        maxlength: [34, 'Name can\'t be greater than 34 character'],
        minlength: [2, 'Name cannot be less than 2 character']
    },
    email: {
        type: String,
        lowercase: true,
        required: [true, 'Email is required'],
        maxlength: [128, 'Email cannot be greater than 128 characters'],
        index: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },

}, { timestamps: true })


userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) next()
    this.password = await bcrypt.hash(this.password, 10)
        // 10 above is the salt
    next()
})

userSchema.methods.checkPassword = async function(password) {
    const result = await bcrypt.compare(password, this.password)
    return result
}
const User = mongoose.model('users', userSchema)
module.exports = User