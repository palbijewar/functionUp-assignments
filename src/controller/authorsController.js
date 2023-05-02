const authorsModel = require("../models/authorsModel");
const booksModel = require("../models/booksModel");

const authors = async function(req,res){
    const data = req.body;
    const authorDetails = await authorsModel.create(data);
    res.send({data : authorDetails});
};

const getAuthors = async function(req,res) {
    const data = req.query;
    const allAuthors = await authorsModel.find(data);
    res.send({data : allAuthors});
};

const getIds = async function(req,res){
    const data = req.query;
    const authorsWithId = await authorsModel.find(data.author_id);
    res.send({data : authorsWithId});
};





module.exports.authors = authors; 
module.exports.getAuthors = getAuthors;
module.exports.getIds = getIds;
