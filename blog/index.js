require('dotenv').config()
const http = require('http')
const express = require('express')
const ejs = require('ejs')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname , "static")))
app.use('/',require(path.join(__dirname , 'routes/blog.js')))

app.set('view engine','ejs')


http.createServer(app).listen(process.env.PORT,()=>{
    console.log('server start');
})