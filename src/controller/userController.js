const userModel = require('../models/userModel');

const createUsers = async (req,res)=>{
    const data = req.body;
    const users = await userModel.create(data);
    res.send({users})
}

module.exports = {createUsers};