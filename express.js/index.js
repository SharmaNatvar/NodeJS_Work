const http = require('http')
const express = require('express')
const app = express()
const ejs = require('ejs' )
const routes = require('./router')


app.set('view engine' , 'ejs')


app.use('/v1',routes)


http.createServer(app).listen(8000,()=>{
    console.log('server start');
})