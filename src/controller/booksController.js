const booksModel = require('../models/booksModel');
const authorsModel = require('../models/authorsModel');
const publishersModel = require('../models/publishersModel');

//Q3.

const createBook = async (req,res)=>{
        const book = await booksModel.create(req.body);
        const populated = await book.populate('author');
        const populateBook = await populated.populate('publisher');
        res.send({success : true, book : populateBook });
    };

    //a
const checkAuthorId = async (req,res)=>{
    try{
    const data = req.query;
    const bookId = await booksModel.find(data).select({author:1,_id:0});
    res.send({success : true, data : bookId})
    } catch (error){
        res.status(500).json({success:false, msg:"this field is required"})
    }
};
 
    //b
const validateAuthorId = async (req,res)=>{
    try{
    const data = req.query;
    const authorId = await authorsModel.find(data).select({_id:1});
    const validation = await booksModel.find({author : authorId});
    res.status(200).json({status : true ,data:validation});
    } catch(error){
        res.status(500).json({success:false, msg:"author details is not present"});
    }
};

    //c
const checkPublisherId = async (req,res)=>{
    try{
    const data = req.query;
    const bookId = await booksModel.find(data).select({publisher:1,_id:0});
    res.send({success : true, data : bookId})
    } catch (error){
        res.status(500).json({success:false, msg:"this field is required"})
    }
};

    //d
const validatePublisherId = async (req,res)=>{
    try{
    const data = req.query;
    const publisherId = await publishersModel.find(data).select({_id:1});
    const validation = await booksModel.find({publisher : publisherId});
    res.status(200).json({status : true ,data:validation});
    } catch(error){
        res.status(404).json({success:false, msg:"publisher details is not present"});
    }
};

//Q4.

const fetchAllBooks = async (req,res)=>{
    const data = req.query;
    const details = await booksModel.find().populate('author').populate('publisher');
    res.send({data:details})
};

//Q5. 
// Create at least 4 publishers (Penguin, Bloomsbury, Saraswati House, HarperCollins). Create at least 6 authors with ratings 2, 3, 3.5, 4, 4.5 and 5. Create around 10 books with these publishers and authors.

// Create a new PUT api /books and perform the following two operations
//  a) Add a new boolean attribute in the book schema called isHardCover with a default false value. For the books published by 'Penguin' and 'HarperCollins', update this key to true.

const updateBooks = async (req,res)=>{
    const publishersBook = await publishersModel.find({name:{$in:["Penguin","HarperCollins"]}});
    const updatedBook = await booksModel.updateMany({publisher:publishersBook._id},{$set:{isHardCover:true}},{new:true});
    res.send({updatedBook});
};

//  b) For the books written by authors having a rating greater than 3.5, update the books price by 10 (For eg if old price for such a book is 50, new will be 60)

const updatePrice = async (req,res)=>{
    const data = req.query
    const authorIds = await authorsModel.find({ratings:{$gt:3.5}}).select({_id:1});
    const updatedPrice = await booksModel.updateMany({author:authorIds},{$inc:{price:10}},{new:true});
    res.send({data:updatedPrice});
}



module.exports = {createBook,checkAuthorId,validateAuthorId,checkPublisherId,validatePublisherId,fetchAllBooks,updateBooks,updatePrice};