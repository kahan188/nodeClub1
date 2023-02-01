const { query } = require("express")
const { schema } = require("../model/ProductSchema")

const validate = (req,res,next) => {

    try
    {
        schema.parse({
            body:req.body,
            query:req.query,
            params:req.params
        })
        return next()

    }
    catch(err){
        return res.status(400).json({
            message:err
        })
    }

}
module.exports = {validate}