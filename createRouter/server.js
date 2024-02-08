require('dotenv').config()

const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = express.Router()


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

router.post('/',(req,res,next)=>{
    let body = req.body
    console.log(body);

    res.status(200).json({
        "message":'done'
    })
})


router.get('/',(req , res , next)=>{
    res.status(200).json({
        "message":'hay bhai',
        "data":[1,2,3,4,4]
    })
})






app.use(router)
http.createServer(app).listen( process.env.PORT , ()=>{
    console.log('server login');
})