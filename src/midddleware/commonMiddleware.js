const moment = require('moment');

 const mid1 = async(req,res,next)=>{
    try {
        const date = new Date()
        const time = moment(date).format('YYYY-MM-DD HH:mm:ss')
        const ip = req.ip
        const route = req.route.path

        const information = {
            time : time,
            IP_Address : ip,
            route : route
        }

        req.info = information
        
        next()
    } catch (error) {
        console.log(error)
    }
}

module.exports = {mid1};