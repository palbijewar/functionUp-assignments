const jwt = require('jsonwebtoken');
const usersModel = require('../models/usersModel');

const auth = async (req,res,next)=>{
        const token = req.headers["x-auth-token"];
        if(token)
        {
          const decoded= jwt.verify(token, "SECRET");
          if(decoded){
            next();
          }
          else{
            res.send("Invalid token");
          }
    
        }
        else{
          res.send("token is required");
        }
};

module.exports = {auth};