const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    author_id : {
        type :'Number',
        required : "true"
    },
    authorName :  {
        type :'String',
        required : "true"
    },
    age : "Number",
    address : "String"
}, {timestamps : true});

module.exports = mongoose.model('authors', authorSchema );