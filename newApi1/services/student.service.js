const { studentSchema } = require("../model")

const getSerData = ()=>{
    return studentSchema.find()
}

const postSerData = (body)=>{
    return studentSchema.create(body)
}

module.exports = {postSerData,getSerData}