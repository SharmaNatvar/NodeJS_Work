const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        unqiue :true
    },
    fullName:{
        type:String
    },
    email:{
        type:String,
        unqiue:true
    },
    password:{
        type:String
    }
})

const user = mongoose.model('userSchema',userSchema)

module.exports = user