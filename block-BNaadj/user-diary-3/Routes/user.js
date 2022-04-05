var express = require('express');

var user = require('../models/UserSchema')
var router = express.Router();



//create
router.get('/new',(req,res)=>{
    res.render('form');
})


router.post('/',(req,res,next)=>{
    user.create(req.body,(err,updateUser)=>{
        console.log(err,updateUser);
        if(err) return next(err)
        res.redirect('/user')
    })
})

//read

router.get('/',(req,res,next)=>{
    user.find({},(err,userlist)=>{
        console.log(err,userlist)
        if(err) return next(err);
        res.render('users',{userlist:userlist});
    })
})



router.get('/:id',(req,res,next)=>{
    var id =  req.params.id;
    user.findById(id,(err,singleuser)=>{
        console.log(err,singleuser);
        if(err) return next(err);
        res.render('singleUser',{singleuser:singleuser});
    })
})
//update

router.get('/:id/edit',(req,res,next)=>{
    var id = req.params.id;
    user.findById(id,(err,users)=>{
        console.log(err,users);
        if(err) return next(err);
        res.render('editForm',{users:users});
    })
})

router.post('/:id',(req,res,next)=>{
    var id = req.params.id;
    user.findByIdAndUpdate(id,req.body,(err,updateuser)=>{
        console.log(err,updateuser);
        if(err) return next(err);
        res.redirect('/user/' + id);
    })
})

//delete

router.get('/:id/delete',(req,res,next)=>{
    user.findByIdAndDelete(req.params.id,(err,deleteuser)=>{
        if(err) return next(err);
        res.redirect('/user')
    })
})


module.exports=router;