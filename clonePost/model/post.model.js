const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    postText :  {
        type: String,
        // required : true
    },
    image:{
        type : String
    },
    creadedAt : {
        type :Date,
        default: Date.now
    },
    likes:{
        type:Array,
        default:[]
    },
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:'user'
    }
})


const post = new mongoose.model('postSchema', postSchema)
module.exports = post