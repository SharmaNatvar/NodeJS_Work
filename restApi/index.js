require('dotenv').config()
const http = require('http')
const express = require('express')
const dbConnect = require('./db')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./routes')


// body to text
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())


// connect routes
app.use('/v1',routes)


// dataBase connect
dbConnect()


http.createServer(app).listen(process.env.PORT, ()=>{
    console.log('server Start');
})