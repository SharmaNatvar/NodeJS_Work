require('dotenv').config();
const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dbConnect = require('./db');
const routes = require('./routes');
const ejs = require('ejs');
const expressSession = require('express-session');
const passport = require('passport');
const userModel = require('./model/user.model');
const path = require('path');
const { isLoggedIn } = require('./middleware/auth');
const flash = require('connect-flash')


// Setup body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// EJS setup
app.use(express.static('./public'))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(flash())
// Setup express session
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: 'nothing'
}));

// Initialize Passport and session
app.use(passport.initialize());
app.use(passport.session());

// Passport configuration
passport.use(userModel.createStrategy());
passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());


// Routes
app.use('/v1', routes);

app.get('/',(req , res) =>{
    res.render ('login' ,{error:req.flash("error")})
  })
app.get('/register',(req , res) =>{
    res.render ('index')
  })
app.get('/feed',(req , res) =>{
    res.render ('feed')
  })
app.get('/profile', isLoggedIn , async(req , res) =>{
    const data = await req.user.populate('posts')
    console.log(data);
    res.render ('profile' , {user : data})
  })

// DB connect
dbConnect(); 


// Create server
http.createServer(app).listen(process.env.PORT, () => {
    console.log('Server started on port', process.env.PORT);
});