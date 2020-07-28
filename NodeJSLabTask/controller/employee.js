var express  = require('express');

var router = express.Router();


var globUsername = require('./login').globUsername;

console.log(globUsername);

router.get('/',(req,res)=>{
    res.render('Employee/index');
});


module.exports =router;