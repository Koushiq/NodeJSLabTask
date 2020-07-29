var express  = require('express');

var router = express.Router();

router.get('/',(req,res)=>{
    res.render('login/index');
});

router.post('/', (req, res)=>{
    if(req.body.username!="" && req.body.password!="")
    {
        if(req.body.username==req.body.password)
        {
            res.redirect("/admin")
        }
        else
        {
            res.redirect("/employee");
        }
    }
    else
    {
        res.send("<h1>Fields can't be empty</h1>");
    }
   
});


module.exports = router;