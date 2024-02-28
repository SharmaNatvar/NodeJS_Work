
const mongoose = require('mongoose')


const dbConnect = () =>{
    mongoose.connect('mongodb://127.0.0.1:27017/sport')
    .then(()=>console.log('Db Connect'))
    .catch((err)=>console.log(err))
}

module.exports = dbConnect