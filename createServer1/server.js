require('dotenv').config()
const http = require('http');
const express = require('express');
const app = express()
const route = express.Router()
const bodyParser = require('body-parser');
const ejs = require('ejs')

// body parser use to convert url datain json
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.set('view engine','ejs')
app.use(express.static('./public'))

app.get('/index',(req,res)=>{
    res.render('index')
})

// get api 

app.get('/',(req,res,next)=>{
    res.status(200).json({
        "message":'data sand'
    })
})

// post api

app.post('/',(req,res,next)=>{
const data = req.body

    res.status(200).json({
        "message":'data get',
        "data": data
    })
})


app.use(route)

http.createServer(app).listen(process.env.PORT,()=>{
    console.log('server start');
})