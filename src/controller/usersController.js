const usersModel = require('../models/usersModel');
const jwt = require('jsonwebtoken')

const users = async (req,res)=>{
  try {
    const data = req.body; 
    const user = await usersModel.create(data);
    res.status(200).json({status:true,msg : user});
  } catch (error) {
    res.status(404).json({status:false, error :error})
  }
}

const login = async (req,res)=>{
  const email = req.body.email;
  const password = req.body.password;

  const user = await usersModel.findOne({ email: email, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not correct",
    });
  const token = jwt.sign({userId: user._id.toString()},"SECRET");
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
};

const verify = async (req,res)=>{
  const userId = req.params.userId;
  const user = await usersModel.findById(userId);
  if(!user) res.send({status:false, msg:"invalid token!!"})
  res.send({status:true, msg:user})
};

const update = async (req,res)=>{
  const userId = req.params.userId;
  const user = await usersModel.findOneAndUpdate({_id:userId},{password:09876},{new:true});
  res.send({user})
};

const deleteUser = async (req,res)=>{
  const userId = req.params.userId;
  const user = await usersModel.findOneAndUpdate({_id:userId},{isDelete:true},{new:true});
  res.send({user})
}





module.exports = {users,login,verify,update,deleteUser}