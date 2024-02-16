require('dotenv').config()
const http = require('http')
const express = require('express')
const routes = require('./routes')
const dbConnect = require('./db/dbConnect')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/v1',routes)

dbConnect()


http.createServer(app).listen(process.env.PORT , ()=>{
    console.log('server Start' );
})