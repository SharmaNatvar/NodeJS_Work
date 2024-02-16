const { studentSchema } = require("../model")
const student = require("../model/student.model")


const getDatastudent = (body)=>{
    // const data = 'data sercive'
    // return student.find()
    return studentSchema.create(body)
}


module.exports = {getDatastudent}