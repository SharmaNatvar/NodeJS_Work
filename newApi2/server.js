require('dotenv').config()
const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dbConnect = require('./db/dbConnect')
const  routes  = require('./routes')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())



app.use('/v1',routes)

// server connect
dbConnect()



// create server 
http.createServer(app).listen(process.env.PORT,()=>{
    console.log('server start');
})