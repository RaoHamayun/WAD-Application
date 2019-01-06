var express = require('express');
var router = express.Router();
var model = require('../models/index');

router.get('/',function(req,res,next){
    console.log(req)
    model.role.findAll({})
    .then(role => res.json({
        error : false,
        data : role
    }))
    .catch(error => res.json({
        error:true,
        data:[],
        error : error
    }));
});

router.post('/',function(req,res,next){
    console.log(req.body);
    const { Role_name } = req.body
    if (Role_name != undefined)
    {
        console.log(Role_name)
        model.role.create({ Role_name:Role_name})
        .then(role => res.status(201).json({
            error:false,
            data:role,
            message:"New Role Has Been Created"
        }))
        .catch(error => res.json({
            error:true,
            data:[],
            error:"Role Creation Failed !"
        }));
    }
    else{
        res.status(401).json({
            error:true,
            errorMessage:"Role Name Is Required!"
        })
    }
});

router.put('/:id',function(req,res,next){
    const Role_id = req.params.id;
    const {Role_name} = req.body;

    model.role.update({Role_Name:Role_name},{where:{id:Role_id}})
    .then(role => res.json({
        error:false,
        message:"Role Updated !"
    }))
    .catch(error => res.status(201).json({
        error:true,
        message:"Role Updation Failed !"
    }));
});

router.delete('/:id',function(req,res,next){
    const Role_id = req.params.id;
    console.log(Role_id)
    model.role.destroy({where:{
        id:Role_id
    }})
    .then(status => res.status(201).json({
        error:false,
        message:"Role Deleted !"
    }))
    .catch(error => res.json({
        error:true,
        error:error
    }))
})

module.exports = router;