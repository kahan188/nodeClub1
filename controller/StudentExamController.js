const StudentExamSchema = require('../model/StudentExamSchema');

exports.addStudentExam = (req, res) => {

    const studentExam = new StudentExamSchema(req.body)
    studentExam.save((err,data)=>{
        if(err){
            res.status(500).json({
                message: "Some error occurred while creating the StudentExam.",
                error: err.message
            })
        }
        else{
            res.status(201).json({
                message: "StudentExam added successfully",
                data: data
            })
        }
    })

}

exports.getAllExamData = (req, res) => {

    StudentExamSchema.find().populate('student').populate('exam').exec((err, data) => {
        if (err) {
            res.status(500).json({
                message: "Some error occurred while retrieving StudentExam.",
                error: err.message
            })
        }
        else {
            res.status(200).json({
                message: "StudentExam retrieved successfully",
                data: data
            })
        }
    })




}