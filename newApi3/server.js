require('dotenv').config()
const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes')
const dbConnect = require('./db/dbConnect')
const { teacherService } = require('./services')

const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.set('view engine','ejs')



// router conncet
app.use('/v1', router)

// dataBase
dbConnect()

// ejs 
app.get('/', async function(req,res){
    const data = await teacherService.getDataDb()
    res.render('index' , {message:data})
})



http.createServer(app).listen(process.env.PORT,()=>{
    console.log('server start');
})



