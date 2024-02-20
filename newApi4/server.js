require('dotenv').config()
const http = require('http')
const express = require('express')
const dbConnect = require('./db')
const routes = require('./routes')
const bodyParser = require('body-parser')
const app = express()


// bodyparser 
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// ejs
// app.set('view engine' , 'ejs')

// 
// app.get('/',(req,res)=>{
//     res.render('./index' , {
//         title:'user panel',
//         text:'this is home'
//     })
// })


// app.get('/userform',(req, res)=>{
//     res.render('./user')
// })

// all routers
app.use('/v1',routes)

// database connect
dbConnect()

http.createServer(app).listen(process.env.PORT,()=>{
    console.log('server start');
})
