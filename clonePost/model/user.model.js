const mongoose = require('mongoose')
const plm = require('passport-local-mongoose')

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required :true,
        unique : true
    },
    fullname:{
        type:String,
        required :true,
        unique : true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
    },
    posts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'postSchema'
    }],
    dp:{
        type : String
    }
})


userSchema.plugin(plm)

const user = mongoose.model('userSchema',userSchema)

module.exports = user