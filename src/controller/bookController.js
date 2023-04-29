const bookModel = require('../models/bookModel');

const createBook = async function(res,req){
    let data = res.body; 
    const bookDetails = await bookModel.create(data);
    req.send({msg : bookDetails});
}

const getBook = async function(req,res){
    let data = req.query;  
    let {bookName,authorName} = data;
    const getDetails = await bookModel.find(data).select({bookName: 1, authorName: 1, _id : 0});
    res.send({data : getDetails});
}

const getBooksInYear = async function(req,res) {
    let data = req.query;
    const getYear = await bookModel.find({year:1836});
    res.send({data: getYear});
}

const getParticularBook= async function (req, res) {
    let data= req.body;
    let savedData= await bookModel.find(data);
    res.send({msg:savedData})
}
const getXINRBooks = async function(req,res) {
    const getBook = await bookModel.find({
        $or : [{"prices.indianPrice":"100"},{"prices.indianPrice":"200"},{"prices.indianPrice":"300"}]
    }).select({createdAt:0,updatedAt:0,_id:0});
    res.send({data:getBook});
}

const getRandomBooks= async function (req, res) {
    let allBooks= await bookModel.find({$or:[{inStock:false},{pages:{$gt:500}}]}).select({bookName:1,_id:0})
    res.send({msg: allBooks})
}


module.exports.createBook = createBook;
module.exports.getBook = getBook;
module.exports.getBooksInYear = getBooksInYear;
module.exports.getParticularBook = getParticularBook;
module.exports.getXINRBooks = getXINRBooks;
module.exports.getRandomBooks = getRandomBooks;

