const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentExamSchema = new Schema({
    student:{
        type: Schema.Types.ObjectId,
        ref: 'student'
    },
    exam:{
        type: Schema.Types.ObjectId,
        ref: 'exam'
    }
})
module.exports = StudentExam = mongoose.model('studentexam', StudentExamSchema);