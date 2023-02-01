const StudentSchema = require('../model/StudentSchema');
const addStudent = (req, res) => {

    const student = new StudentSchema(req.body)
    student.save((err,data)=>{
        if(err){
            res.status(500).json({
                message: "Some error occurred while creating the Student.",
                error: err.message
                
            })
        }
        else{
            res.status(201).json({
                message: "Student added successfully",
                data: data
            })
        }
    })

    // const getAllStudents = (req,res)=>{

    //     StudentSchema.find((err,data)=>{

    //         if(err){
    //             res.status(500).json({
    //                 message: "Some error occurred while retrieving students.",
    //                 error: err.message
    //             })
    //         }
    //         else{
    //             res.status(200).json({
    //                 message: "Students retrieved successfully",
    //                 data: data
    //             })
    //         }
    //     })

    // }

    const getAllStudents = (req,res)=>{

        StudentSchema.find({type:"63bbf4a78ae2b82963967b8f"}).populate('type').exec((err,data)=>{

            if(err){
                res.status(500).json({
                    message: "Some error occurred while retrieving students.",
                    error: err.message
                })
            }
            else{
                res.status(200).json({
                    message: "Students retrieved successfully",
                    data: data
                })
            }

        })


    }
    const studentGetById = (req,res)=>{

    var id = req.params.id;
    StudentSchema.findById(req.params.id,(err,data)=>{
        if(err){
            res.status(500).json({
                message: "Some error occurred while retrieving students.",
                error: err.message
            })
        }
        else{
            if(data!= null || data != undefined){
                res.status(200).json({
                    message: "Students retrieved successfully",
                    data: data
                })
            }
            else{
                res.status(404).json({
                    message: "Student not found",
                    data: data
                })
            }
        }
    })
    }
    const updateStudent =(req,res)=>{

    var id = req.params.id;
    StudentSchema.findByIdAndUpdate(id,req.body,(err,data)=>{

        if(err){
            res.status(500).json({
                message: "Some error occurred while updating students.",
                error: err.message
            })
        }
        else{
            if(data!= null || data != undefined){
                res.status(200).json({
                    message: "Students updated successfully",
                    
                })
            }
            else{
                res.status(404).json({
                    message: "Student not found",
                    
                })
            }
        }


    })



        }
        const deleteStudent = (req,res)=>{

        StudentSchema.findByIdAndDelete(req.params.id,(err,data)=>{
            if(err){
                res.status(500).json({
                    message: "Some error occurred while deleting students.",
                    error: err.message
                })
            }
            else{
                res.status(200).json({
                    message: "Students deleted successfully",
                    data: data
                })
            }
        })
    }

}

module.exports = {
    addStudent,
    getAllStudents,
    studentGetById,
    deleteStudent,
    updateStudent
}