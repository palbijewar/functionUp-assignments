const jwt = require('jsonwebtoken');
const usersModel = require('../models/usersModel');

const auth = async (req,res,next)=>{
    const token = req.headers.authorization.split(" ")[1]
    if(!token) return res.status(404).json({Message : "Token Not Found"})
    const decoded = jwt.verify(token, "SECRET")
    const thisIsThatUser = await usersModel.findById(decoded._id)
    req.user = thisIsThatUser
    next()
}

module.exports = {auth}