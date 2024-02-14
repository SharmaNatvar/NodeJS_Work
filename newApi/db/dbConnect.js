const mongoose = require('mongoose')

const MONGOURL = 'mongodb://localhost:27017/newapi'

mongoose.connect(MONGOURL,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})


const db = mongoose.connection;

db.on('connected',()=>{
    console.log('mongo server connected ');
})


module.exports = db;
