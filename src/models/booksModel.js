const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    bookName : {
        type : "String",
        require : "true"
    },
    author_id : {
        type :"Number",
        required : "true"
    },
    price : {
        type :"Number",
        required : "true"
    },
    ratings : "Number"
}, {timestamps : true});

module.exports = mongoose.model('books', bookSchema);