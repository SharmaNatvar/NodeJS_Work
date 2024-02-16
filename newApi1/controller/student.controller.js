const { studentService } = require("../services");



const getData = async(req,res)=>{
const user = await studentService.getSerData()
    res.status(200).json({
        message:'data get',
        user
    })
}


const postData = async(req, res)=>{
    const body = req.body
    console.log(body);
    const user = await studentService.postSerData(body)
    res.status(200).json({
        message:'user data',
    data:user
    })
    }


module.exports = {postData , getData}