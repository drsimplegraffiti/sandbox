
const mongoose = require('mongoose');


const lessonSchema = new mongoose.Schema({
    lessonName: {
        type: String,
        required: true,
    },
    category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category' 
    },
    subject_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject' 
    }
})

const Lesson = mongoose.model('User', lessonSchema);

module.exports = Lesson;