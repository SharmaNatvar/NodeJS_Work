require('dotenv').config()
const http = require('http')
const express = require('express')
const dbConnect = require('./db')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./Routes')

// use req body
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// routes
app.use('/v1' , routes)


// database
dbConnect()

// server 
http.createServer(app).listen(process.env.PORT,()=>{
    console.log('server start');
})
