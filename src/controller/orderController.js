const { count } = require("console")
const orderModel = require('../models/orderModel');
const userModel = require('../models/userModel');
const productModel = require('../models/productModel');

const createOrder = async (req,res)=>{
    const data = req.body;
    const order = await orderModel.create(data);
    const populateUser = await order.populate('userId');
    const populateProduct = await populateUser.populate('productId');
    res.send({populateProduct})
}

module.exports = {createOrder}