const orderModel = require("../models/orderModel");
const productModel = require("../models/productModel");
const userModel = require("../models/userModel");

const mid1 = async (req,res,next)=>{
    try{
        let {isFreeAppUser,userId,productId} = req.body;
         
        const user = await userModel.findById(userId);
        const product = await productModel.findById(productId);

        if(!userId && !productId)return res.status(500).json({success : false, msg : "there is no userId or productId "})

        if(isFreeAppUser===false){
            if(user.balance > product.price){
                user.balance -= product.price
                user.save()
            }
        }
        console.log(user)
        next();
    } catch (error) {
        console.log("errorrr")
    }
}
     
module.exports = {mid1}