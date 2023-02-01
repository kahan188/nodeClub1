const express = require('express');
const router = express.Router();
const StudentTypeController = require('../controller/StudentTypeController');
router.post('/add',StudentTypeController.addStudentType);

module.exports = router;