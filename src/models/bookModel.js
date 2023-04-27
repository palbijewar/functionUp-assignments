const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
    bookName : {
    type : String,
    required: true
},
   authorName : {
    type : String,
},
   Category : {
    type : String,
   },
   Year : {
    type : Number
   }
}, {timestamps: true} );

module.exports = mongoose.model("book", bookSchema);
