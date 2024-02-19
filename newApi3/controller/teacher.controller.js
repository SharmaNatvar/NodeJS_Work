const { teacherService } = require("../services")



 const getDataFun = async(req,res)=>{
    const teacherData = await teacherService.getDataDb()
    console.log(teacherData,'teacherData');
    res.status(200).json({
        message: 'data Sand',
        data:teacherData
    })
}


const postDataFun = async(req,res)=>{
    const body = req.body
    const teacherData = await teacherService.postDataDb(body)
    console.log(teacherData,'teacherData');
    
    res.render('./index')
    // res.status(200).json({
    //     message: 'data Sand',
    //         data:teacherData
    // })
    }


    module.exports = {getDataFun , postDataFun}