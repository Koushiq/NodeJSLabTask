var express  = require('express');

var router = express.Router();


var globUsername = require('./login').globUsername;



router.get('/',(req,res)=>{
    res.render('employee/index');
});


module.exports =router;