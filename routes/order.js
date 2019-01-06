var express = require('express');
var router = express.Router();
var model = require('../models/index');
var Sequelize = require('sequelize');
var sequelize = require('../config/config.json');

router.get('/',function(req,res,next){
  
    model.order.findAll({})
    .then(order => res.json({
        error : false,
        data : order
    }))
    .catch(error => res.json({
        error:true,
        data:[],
        error : error
    }));
});

router.get('/GetCustomerCount',function(req,res,next){
    console.log('In router')
    model.order.findAll({
        attributes: [[Sequelize.fn('COUNT', Sequelize.col('id')), 'id']]
    })
    .then(count => res.json({
        error : false,
        customerCount:count
    }))
    .catch(error => res.json({
        error:true,
        customerCount:[],
        error : error
    }));  
})

router.get('/GetSales',function(req,res,next){
    console.log('In GetSales')
    model.order.findAll({
        attributes: [[Sequelize.fn('COUNT', Sequelize.col('id')), 'id']],
        where: { status: 0 }
    })
    .then(count => res.json({
        error : false,
        GetSales:count
    }))
    .catch(error => res.json({
        error:true,
        GetSales:[],
        error : error
    }));  
})

router.post('/PlaceOrder',function(req,res,next){
    console.log(req.body);
    const {productId} = req.body
    model.product.findAll({
        where: { id:  productId}
    })
    .then(product => {
        // console.log(product)
        // var p_Name = product.dataValues.ProductName;
        // console.log(p_Name)
        // var qty = product.dataValues.price;
        model.order.create({ customerName:'Test',ProductName:"p_Name",status:1,Qty:1500})
        .then(order => res.status(201).json({
            error:false,
            data:order,
            message:"New Order Has Been Placed"
        }))

    })
    .catch(error => res.json({
        error:true,
        GetSales:[],
        error : error
    }));
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



module.exports = router;