const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema({
    fname:{
        type : String,

    },
    email:{
        type:String
    },
    gender:{
        type:String,
        enum:['male','female']
    },
    subject:{
        type:String
    }
})



const teacher = mongoose.model('teacherSchema',teacherSchema)
module.exports = teacher