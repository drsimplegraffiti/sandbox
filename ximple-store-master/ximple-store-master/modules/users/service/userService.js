const User = require('../models/User')

/**
 * create a new user and return it
 * @param {object} userInput - It is user input with all the variables for user model
 */
const addUser = async(userInput) => {
    const user = new User(userInput)
    await user.save()
    return user
}


module.exports = { addUser }