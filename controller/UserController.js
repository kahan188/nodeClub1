const userSchema = require('../model/USerSchema');
const { model } = require('mongoose');
const {hashPassward1,comparePassword1} = require('../util/Encrypt');
const { json } = require('express');
module.exports.getAllUsers = ((req,res)=>{
    userSchema.find((err,data)=>{
        if(err)
        {
            res.send("errror");
        }
        else
        {
            res.send(data);
        }

    })
})
module.exports.createUser= async(req,res)=>{
    const hashedPassward = await hashPassward1(req.body.passward)
    var userData = {
        name:req.body.name,
        email:req.body.email,
        password:hashedPassward,
        age:req.body.age
    }
    var user = new userSchema(userData)
    user.save((err,data)=>{
        if(err){
            res.status(500).json({
                message:"error"
            })
        }else{
            res.status(201).json({
                message:"success",
                data:data
            })
            
        }

    })

}
exports.deleteUser= ((req,res)=>{
    var id = req.params.id;
    userSchema.findByIdAndDelete(id,(err,data)=>{
        if(err){
            res.status(500).json({
                message:"error",
            })
        }
        else{
            if(data==null){
                res.status(404).json({
                    message:"not found",
                })
            }
            else{
                res.status(200).json({
                    message:"success",
                    data:data
                })
            }
        }

    })

})
exports.getUserById = ((req,res)=>{
    var id = req.params.id;
    userSchema.findById(id,(err,data)=>{
        if(err){
            res.status(500).json({
                message:"error",
            })
        }
        else{
            if(data!=null){
                res.status(200).json({
                    message:"success",
                    data:data
                })
            }
            else{
                res.status(404).json({
                    message:"not found",

                })
            }
        }
    })

})
exports.updateUser = ((req,res)=>{
    var id=req.params.id
    userSchema.findByIdAndUpdate(id,req.body,(err,data)=>{
        if(err){
            res.status(500).json({
                message:"error",
            })
        }
        else{
            if(data!=null){
                res.status(200).json({
                    message:"success",
                    data:data
                })
            }
            else{
                res.status(404).json({
                    message:"not found",

                })
            }
        }
    })
})
exports.loginUser = async(req,res)=>{
    var email = req.body.email;
    var password = req.body.password;

    userSchema.findOne({email:email},(err,data)=>{
        if(err){
              res.status(500).json({
                message:"error",
              })  

        }
        else{
            if(data){
                comparePassword1(password,data.password).then((result)=>{

                        if(result){
                            res.status(200).json({
                                message:"success",
                                data:data
                            })
                        }
                        else{
                            res.status(401).json({
                                message:"unauthorized",
                            })
                        }
                })
            }
            else{
                res.status(404).json({
                    message:"not found",
                })
            }
        }
    })


}
