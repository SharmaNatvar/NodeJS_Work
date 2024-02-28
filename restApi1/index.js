require('dotenv')
const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dbConnect = require('./db')
const routes = require('./router')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())



// routes
app.use('/v1' , routes)


// database connect
dbConnect()

// server
http.createServer(app).listen(8000 ,()=>{
    console.log('server connect');
})