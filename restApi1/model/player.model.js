const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

const player = new mongoose.model('playerSchema', playerSchema)
module.exports = player