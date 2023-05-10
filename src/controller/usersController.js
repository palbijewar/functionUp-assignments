const usersModel = require('../models/usersModel');
const jwt = require('jsonwebtoken')

const users = async (req,res)=>{
    const data = req.body;
    const user = await usersModel.create(data);
    res.send({user})
};

const login = async (req,res)=>{
    try{
    const {email,password} = req.body;
    if(!email && !password) return  res.send({msg :"please enter valid email and password"});
    const user = await usersModel.findOne({email});
    if(!user) {
        res.send({msg : "no user found!"})
    }
    if(user.password==password){
        const token = jwt.sign({_id:user._id}, "SECRET",{
            expiresIn :"3d"
    }) 
    res.status(200).set("Authorization", "bearer" + token).json({token,user})
    console.log(token)
    }
} catch(error){
    console.log(error)
}
};

const verification = async (req,res)=>{
res.send({msg :"valid token!"});
};

const updateUser = async function (req, res) {
    let userId = req.params.userId;
    let data = req.body;
    let user = await usersModel.findById(userId);
    if(user)
    {
      let updatedData = await usersModel.findOneAndUpdate(
        { _id: userId },
        data,
        { new: true }
      );
      res.send(updatedData);
    }
    else
    {
      res.send("wrong user id");
    }
};  

const deleteUser = async (req, res) =>{
    const userId = req.params.userId;
    const user = await usersModel.findById(userId);
    user.isDelete = true
    user.save()
    res.send(user)
  };


module.exports = {users,login,verification,updateUser,deleteUser}