var express = require('express');

var router = express.Router()

router.get('/',(req,res,next)=>{
    res.render("users", { list: ["ankit", "suraj", "prashant", "ravi"] });
    next()
})


router.post('/id',(req,res,next)=>{
    console.log(req.body)
    res.render('singleuser',{user:req.body})
    //res.send(req.body)
    next()
})


router.get('/new',(req,res)=>{

    res.render('userForm')
    

})

router.delete('/:id',(req,res)=>{


})


router.put('/:id',(req,res)=>{


})




module.exports=router;