const mongoose = require('mongoose');
const { Schema } = mongoose;


const subscribeSchema = new mongoose.Schema({


    email: {
        type: String,
        required: [true, 'Please enter a valid email to proceed']
    },

}, {

    timestamps: true
})


// Exports schemas
module.exports = mongoose.model("Subscribe", subscribeSchema);