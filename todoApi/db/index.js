const mongoose = require('mongoose')


const dbConnect = () =>{
    mongoose.connect('mongodb://127.0.0.1:27017/todoList')
    .then(()=>{
        console.log('db connect');
    })   
    .catch((err)=>{
        console.log(err);
    })
}


module.exports = dbConnect