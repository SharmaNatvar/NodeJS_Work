const http = require('http')
const express = require('express')
const fs = require('fs')
const app = express()


http.createServer(app).listen(3003,function(){
    console.log('server ');
})