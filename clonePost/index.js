require('dotenv').config()
const http = require('http')
const express = require('express')
const app = express()
const  bodyParser = require('body-parser')
const dbConnect = require('./db')
const routes = require('./routes')
const ejs = require('ejs')
const expressSession = require('express-session')
const passport = require('passport')
const userModel = require('./model/user.model')


// setup body passer
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

// route
app.use('/v1',routes)

// ejs setup
app.set('view engine' , 'ejs')


// setup express session
app.use(expressSession({
    resave:false,
    saveUninitialized:false,
    secret:'nothing'
}))
app.use(passport.initialize())
app.use(passport.session())
passport.serializeUser(userModel.serializeUser())
passport.deserializeUser(userModel.deserializeUser())

// db connect
dbConnect()



http.createServer(app).listen(process.env.PORT,()=>{
    console.log('server start');
})