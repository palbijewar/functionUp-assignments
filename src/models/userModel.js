const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    name: {
        type : "String",
        required : true
    },
    balance:{
        type : "Number",
        required : true
    }, 
    address:{
        type : "String",
        required : true
    },
    age: {
        type : "Number",
        required : true
    },
     gender: {
        type : "String",
        required : true
    }, 
    isFreeAppUser: {
        type : "Boolean",
        required : true
    }
}, {timestamps:true});


module.exports = mongoose.model('users', userSchema);