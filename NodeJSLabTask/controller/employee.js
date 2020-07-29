var express  = require('express');

var router = express.Router();


var globUsername = require('./login').globUsername;



router.get('/',(req,res)=>{
    res.render('employee/index');
});



router.get('/MyProfile',(req,res)=>{
    res.render('employee/MyProfile/index');
});

router.get('/UpdateProfile',(req,res)=>{
    res.render('employee/UpdateProfile/index');
});





module.exports =router;