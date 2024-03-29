const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number
    },
    mobileno:{
        type:Number
    }
})


const user =  mongoose.model('userSchema',userSchema)
module.exports = user