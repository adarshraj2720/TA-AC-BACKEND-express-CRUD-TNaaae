var express = require('express');

var user = require('../models/UserSchema')
var router = express.Router();

router.get('/new',(req,res)=>{
    res.render('form');
})

router.post('/',(req,res,next)=>{
    user.create(req.body,(err,updateUser)=>{
        console.log(err,updateUser);
        if(err) return next(err)
        res.redirect('/user/new')
    })
})

module.exports=router;