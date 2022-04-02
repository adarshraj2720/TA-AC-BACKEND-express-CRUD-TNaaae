var express = require('express');

var router = express.Router()


router.get('/new',(req,res)=>{
    res.send('New Studnet');

})



router.post('/',(req,res)=>{
        res.send('Student')
})

router.get('/',(req,res)=>{
    
     res.render("student", { list: ["ankit", "suraj", "prashant", "ravi"] });
    // res.send('hii')
})


router.get('/:id',(req,res)=>{
    // var id = req.params.id;
    res.render("index", {
        student: { name: "rahul", email: "rahul@altcampus.io" }})
})

module.exports= router;