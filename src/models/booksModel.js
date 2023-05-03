const mongoose = require('mongoose');
const authorsModel = require('../models/authorsModel');
const publishersModel = require('../models/publishersModel');


const booksSchema = new mongoose.Schema({
    bookName :{
        type : "String",
        required : "true"
    },
    author :{
        type : mongoose.Schema.ObjectId,
        ref : "newAuthors",
        required : "true"
    },
    price :{
        type : "Number",
        required : "true"
    },
    publisher :{
        type : mongoose.Schema.ObjectId,
        ref : "publishers",
        required : "true"
    },
    ratings :{
        type : "Number",
        required : "true"
    }
}, {timestamps:true});

module.exports = mongoose.model('newBooks', booksSchema);