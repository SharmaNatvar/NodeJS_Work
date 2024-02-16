require('dotenv').config()
const mongoose = require('mongoose')


const dbConnect = ()=>{
    mongoose.connect(process.env.DBBASEURL).then(()=>{
        console.log('db connected');
    }).catch((err)=>{
        console.log(err);
    })

}

module.exports = dbConnect