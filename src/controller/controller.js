

const mainPage = async(req,res)=>{
    try {
        res.status(200).json({success:true, information : req.info})
    } catch (error) {
        console.log(error)
        req.json({success: false, error : error})
    }
}


module.exports = {mainPage};