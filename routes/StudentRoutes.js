const express = require("express")
const router = express.Router();
const StudentController = require('../controller/StudentController');
router.post('/student',StudentController.addStudent);
module.exports = router;