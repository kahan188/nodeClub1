const router= require('express').Router();
const StudentExamController = require('../controller/StudentExamController');
router.post('/studentexam', StudentExamController.addStudentExam);
router.get('/studentexam', StudentExamController.getAllExamData);

module.exports = router;