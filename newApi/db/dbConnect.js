const mongoose = require('mongoose')

const MONGOURL = 'mongodb://127.0.0.1:27017/newapi'
const dbConnect = () =>{
    mongoose.connect(MONGOURL).then(()=>{
        console.log('dbconnect');
    })
    .catch((err)=>{
        console.log(err);
    })
}


module.exports = dbConnect