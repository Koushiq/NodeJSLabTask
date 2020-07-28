var express  = require('express');

var router = express.Router();

var globUsername;

router.get('/',(req,res)=>{
    res.render('login/index');
});

router.post('/', function(req, res){

	/* if(req.body.username == req.body.password){
		res.redirect('/home');
	}else{
		res.send('invalid username/password');
    } */

    const fs = require('fs');

    fs.readFile('users.json', (err, data) => {
        if (err) throw err;
        let users = JSON.parse(data);
        
        var flag=false;
        for(x in users.employee)
        {
        
            if(req.body.username==users.employee[x].username && req.body.password==users.employee[x].password)
            {
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
           res.send("correct cred !");
        }
        


    });





});


module.exports =router;