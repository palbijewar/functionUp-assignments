const bookModel = require('../models/bookModel');

const createBook = async function(req,res){
    let data = req.body; 
    // let {bookName, authorName, category, year} = data; 
    const bookDetails = await bookModel.create(data);
    res.send({msg : bookDetails});
}

const getBook = async function(req,res){
    let data = req.query;  
    const getDetails = await bookModel.find(data);
    res.send({msg : getDetails});
}

module.exports.createBook = createBook;
module.exports.getBook = getBook;
