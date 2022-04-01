var express = require('express');

var mongoose = require('mongoose');

var path = require('path');

var app = express();

app.use(express.json())


mongoose.connect('mongodb://127.0.0.1:27017/test',(err)=>{
    console.log(err ? err : "connected");
})

app.set('view engine',"ejs");
app.set('views',path.join(__dirname ,'views'));



app.get('/',(req,res)=>{
    res.render('index');
})

app.listen(4000,()=>{
    console.log('WELCOME');
})