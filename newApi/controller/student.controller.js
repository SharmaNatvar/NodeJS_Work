// const student = require("../model/student.model");
const { studentService } = require("../services");

const getStudent = async (req,res)=>{
    // const bodyData = req.body
    // console.log('bodyData',bodyData);
    const user = await studentService.getDatastudent()
//    console.log(user,'user');

    res.status(200).json({
       'message':'data get',
       'data ':'welcome',
       user
    })
   
   }


   module.exports = {getStudent}