const { teacherSchema } = require("../model")



const getDataDb = ()=>{
    return teacherSchema.find()
}

const postDataDb = (body) =>{
    return teacherSchema.create(body)
}


module.exports = {getDataDb , postDataDb}