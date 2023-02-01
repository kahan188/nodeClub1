const router = require('express').Router();
const ExamController = require('../controller/ExamController');

router.post('/exam', ExamController.addExam);

module.exports = router;