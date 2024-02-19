const { studentService } = require("../services");


const postData = async(req , res)=>{
    const body = req.body
    console.log(body);
    const userPost = await studentService.postDBData(body)
    res.status(200).json({
        message:'data add sccusesfull',
        data : userPost
    })
}


const getData = async(req,res)=>{
    const data = await studentService.getData()
    res.status(200).json({
        message:"data get",
        data
    })
}


module.exports = {postData , getData}