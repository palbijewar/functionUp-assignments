const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    mobile :{
        type : Number,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    isDelete :{
        type : Boolean,
        default : false
    }
}, {timestamps:true});

module.exports = mongoose.model('users', userSchema);