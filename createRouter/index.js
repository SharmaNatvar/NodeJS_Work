require('dotenv').config()
const http = require('http')
const express = require('express')
const app = express()
const route = express.Router()
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

route.post('/',(req,res,next)=>{
    const body = req.body
    console.log(body);
    const value = parseInt(body.age)
    console.log(body.age);
    console.log(value);
    const value2 = parseInt(body.age2)
    const add = value + value2
    console.log(add);
    const sum = {...body,"add":add}
    console.log(sum);
    res.status(200).json({
        'message':'done',
        'data':sum
    })
})


route.get('/',(req,res,next)=>{
    res.status(200).json({
        'message':'done',
        'number':[2,1,4]
    })
})


app.use(route)

http.createServer(app).listen(process.env.PORT , ()=>{
    console.log('server start');
})
