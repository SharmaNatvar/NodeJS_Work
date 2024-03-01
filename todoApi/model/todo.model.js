const mongoose = require('mongoose')



const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required : true
    },
    description:{
        type:String,
        required:true
    },
    workStatus:{
        type:Boolean,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'userSchema'
    }
})



const todo = new mongoose.model('todoSchema' , todoSchema)
module.exports = todo