const { studentSchema } = require("../model")
// const student = require("../model/student.model")



const postDBData = (body) =>{
    return studentSchema.create(body)
}

const getData = ()=>{
    return studentSchema.find()
}



module.exports = {postDBData , getData}