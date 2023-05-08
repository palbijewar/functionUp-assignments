const mongoose = require('mongoose');
const userModel = require('../models/userModel');
const productModel = require('../models/productModel');

const orderSchema = new mongoose.Schema({
    
    userId: {
        type : mongoose.Schema.Types.Mixed,
        required : true
    },
    productId:{
        type : mongoose.Schema.Types.Mixed,
        required : true
    }, 
    price:{
        type : "Number",
        required : true
    },
    isFreeAppUser : Boolean,
    date:{
        type : Date,
        default : Date.now
    }
}, {timestamps:true});


module.exports = mongoose.model('orders', orderSchema);