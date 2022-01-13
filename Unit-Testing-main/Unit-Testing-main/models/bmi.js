const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating a schema model
const bmiSchema = new Schema({
    name: {
        type: String
    },
    weight: {
        type: String
    },
    height: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

// Exports schemas
module.exports = mongoose.model("Bmi", bmiSchema);