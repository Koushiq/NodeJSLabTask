var express = require('express');

var bodyParser = require('body-parser');

var login = require('./controller/login');

var logout = require('./controller/logout');

var app = express();

app.set('view engine','ejs');

app.use(bodyParser());
app.use('/login',login);
app.use('/logout',logout);

app.get('/',(req,res)=>{
    res.send("this is index page!<br> <a href='/login'>Click here to Login </a> ");
});

app.listen(3000,()=>{
    console.log("server started at 3000");
});