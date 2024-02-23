require('dotenv').config()
const http = require('http')
const express = require('express')
const dbConnect = require('./db')
const bodyParser = require('body-parser')
const routes = require('./routes')
const { studentController } = require('./controller')
const { userServices } = require('./services')
const app = express()


// middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// file setup
app.use( express.static('./public'))

// ejs setup
app.set('view engine' , 'ejs')


app.get('/' , async(req, res)=>{
    res.render('./index')
})

app.get('/read',(req,res)=>{
    res.render('./read')
})



// routes
app.use('/v1',routes)



// dbConnect
dbConnect()



// server start
http.createServer(app).listen(process.env.PORT, ()=>{
    console.log('server start');
})