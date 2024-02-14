const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    courseName:{
        type : String,
    },
    durtion:{
        type:Number
    },
    price:{
        type:Number
    },
    review:{
        type:Number
    }
})


const course = mongoose.model('courseName',courseName)
module.exports = course