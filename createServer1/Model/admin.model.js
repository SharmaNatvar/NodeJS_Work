const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    userName:{
        type:String,
        unqiue:true
    },
    fullName:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        unqiue:true
    },
number:{
    type:Number
},
    password:{
        type:String,
        unqiue:true
    },
    subject:{
        type:String,
        enum:['math','sci','ss','english','hindi','other']
    },
    education:{
        type:String
    }
})


const admin = mongoose.model('adminSchema',adminSchema)
module.exports = admin
