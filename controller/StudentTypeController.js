const StudentTypeSchema = require('../model/StudentTypeSchema');


exports.addStudentType = (req, res) => {

    const studentType = new StudentTypeSchema(req.body)
    studentType.save((err,data)=>{
        if(err){
            res.status(500).json({
                message: "Some error occurred while creating the Student Type.",
                error: err.message
                
            })
        }
        else{
            res.status(201).json({
                message: "Student Type added successfully",
                data: data
            })
        }
    })
}