const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName : {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const user = new mongoose.model('userSchema',userSchema)
module.exports= user