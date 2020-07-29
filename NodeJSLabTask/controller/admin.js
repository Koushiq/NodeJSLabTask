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

router.get('/Update/:id',(req,res)=>{

    res.render("admin/Update/index",{name:req.params.id});
});

router.get('/Delete/:id',(req,res)=>{
    console.log("I am here");
    res.render("admin/Delete/index",{name:req.params.id});
});


router.post('/admin',(req,res)=>
{
    res.redirect('/admin/AddEmployee');
});


module.exports =router;