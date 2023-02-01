const productSchema = require('../model/ProductSchema')
exports.createProduct = (req,res) => {
    const product = new productSchema(req.body)
    product.save((err,data)=>{
        if(err){
            res.status(500).json({
                message: "Some error occurred while creating the product.",
            });
        }
        else{
            res.status(200).json({
                message: "Product created successfully",
                data: data
            })
        }
    })
}