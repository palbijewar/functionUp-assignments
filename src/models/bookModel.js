const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
    bookName : {
    type : String,
    required: true
},
    prices: {
    indianPrice: String,
    europePrice: String,
},
   authorName : {
    type : String,
},
   year : {
    type : Number,
    required : true
},
   tags: [String],
   inStock: Boolean,
   pages : Number,
}, {timestamps: true} );

module.exports = mongoose.model("book", bookSchema);
