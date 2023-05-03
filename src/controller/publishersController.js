const publishersModel = require('../models/publishersModel');

const createPublishers = async function(req,res){
    const data = req.body;
    const publishers = await publishersModel.create(data);
    res.send({data:publishers});
}


module.exports = {createPublishers};