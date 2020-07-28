var express  = require('express');

var router = express.Router();



router.get('/',(req,res)=>{
    res.render('login/index');
});

router.post('/', function(req, res){

    const fs = require('fs');
    fs.readFile('users.json', (err, data) => {
        if (err) throw err;
        let users = JSON.parse(data);
        var flag=false;
        var isEmp=false;

        for(x in users.employee)
        {
            if(req.body.username==users.employee[x].username && req.body.password==users.employee[x].password)
            {
                globUsername=req.body.username;
                isEmp=true;
                flag=true;
                console.log("correct cred");
                break;
            }
        }

         if(flag)
        {
            for(x in users.admin)
            {
                if(req.body.username==users.admin[x].username && req.body.password==users.admin[x].password)
                {
                    flag=true;
                    console.log("correct cred");
                    break;
                }
            }
        } 

        if(!flag)
        {
            res.send('invalid username/password');
        }
        else
        {
            if(isEmp)
            {
                //res.redirect("/employee?username="+globUsername);
                res.render("employee/index",{name:globUsername});
            }
           //res.send("correct cred !");
        }

    });
});

module.exports = router;
//module.exports = globUsername;