const http = require('http')
const express = require('express')
const app = express()
const ejs = require('ejs' )

app.set('view engine' , 'ejs')

app.get('/',(req,res)=>{
    res.render('index')
})


http.createServer(app).listen(8000,()=>{
    console.log('server start');
})