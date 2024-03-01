require('dotenv').config()
const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dbConnect = require('./db')
const routes = require('./routes')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// route
app.use('/v1' , routes)

// database connect
dbConnect()


http.createServer(app).listen(process.env.PORT,()=>{
    console.log('server start');
})