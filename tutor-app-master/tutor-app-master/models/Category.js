
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        enum: ['Primary', 'SSS', 'JSS']
    },
    subject_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject' 
    }
})

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;