require('dotenv').config()
const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const  routes  = require('./routes')
const dbConnect = require('./db/dbConnect')
const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


// router call
app.use('/v1',routes)

// dataBase Connect
dbConnect()



http.createServer(app).listen(process.env.PORT,()=>{
    console.log('server start');
})