const http = require('http')
const express = require('express')
const nameFun = require('./model')

const app = express()

const result = nameFun


console.log(result);

http.createServer(app).listen(3003,function(){
    console.log('server start');

})

app.get('/',function(req , res){
    res.send('server is there')
})
