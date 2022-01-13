
const mongoose = require('mongoose');


const subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    isRegistered: {
        type: Boolean,
        default: false,
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
    ref: 'User' 
    },
    category_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category' 
    },
})

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;