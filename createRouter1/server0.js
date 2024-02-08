require('dotenv').config()
const http = require('http')
const fs = require('fs')
const express = require('express')
const app = express()
const route = express.Router()
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({'extended':false}))
app.use(bodyparser.json())


route.post('/',(req, res, next)=>{
    console.log(req.body);
    const body = req.body
    const dataU = body
    fs.writeFileSync( 'textData.txt' , dataU)
    // console.log(fs.readFileSync('textData.txt','utf-8'))
    res.status(200).json({
        'message':'Done',
        'status': 200,
        'data':body
    })
})

route.get('/',(req, res, next)=>{
    res.status(200).json({
        'name':'sharma',
        "phone":'9978543917'
    })
})

app.use(route)

http.createServer(app).listen(process.env.PORT,()=>{
    console.log('server start');
})