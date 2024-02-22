const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema({
    userName : {
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    number:{
        type:String,
    },
    age:{
        type:Number,
    }
})


const student = mongoose.model('studentSchema' ,studentSchema )
module.exports = student