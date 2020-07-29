var express  = require('express');

var router = express.Router();

var login = require('./login');

var app = express();

const fs = require('fs');


router.get('/',(req,res)=>{
    res.render('admin/index');
});

router.get('/AddEmployee',(req,res)=>{
    res.render("admin/AddEmployee/index");
});

router.get('/AllEmployeeList',(req,res)=>{

    res.render("admin/AllEmployeeList/index");
});

router.get('/Update',(req,res)=>{
    res.render("admin/Update/index");
});

router.get('/Delete',(req,res)=>{
    res.render("admin/Delete/index");
});


router.post('/admin',(req,res)=>
{
    res.redirect('/admin/AddEmployee');
});


module.exports =router;