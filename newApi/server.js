require('dotenv').config()
const http = require('http')
const express = require('express')
const router = require('./routes')
// const { db } = require('./model/student.model')
const app = express()
// const db = require('./db/dbConnect')

app.use(router)

// db()


http.createServer(app).listen(process.env.PORT , ()=>{
    console.log('server Start' );
})