var express = require('express');
var router = express.Router();
var model = require('../models/index');


router.get('',function(req,res,next){
    res.render('Login') 
})
router.post('/',function(req,res,next){
    console.log(req.body)

    const {userName,password} = req.body
    
    model.login.findAll(
        {where:
            {
                userName:userName , 
                password : password
            }
        })
    .then(login => {
        return res.redirect('/d');
    })
    .catch(error => res.json({
        error:true,
        data:[],
        error : error,
        message:"Error"
    }));
});

module.exports = router;