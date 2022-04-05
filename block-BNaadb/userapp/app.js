//require


var express = require('express');
var mongoose = require('mongoose');
// var ejs = require('ejs');
var path = require('path');



var userRouter = require('./Routes/user')

//connect to db 

mongoose.connect('mongodb://127.0.0.1:27017/User',(err)=>{
    console.log('connected', err ? false : true);
})


//instantiate express app

var app = express();



//middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json())



//setup view engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname ,'views'));



//setup static directory
app.use(express.static(path.join(__dirname,'public')));



//routing middlewares
app.use('/user',userRouter)


//error handler

//404

app.use((req,res,next)=>{
    res.send('PAGE NOT FOUND');
})

//custom error handler middlewares

app.use((err,req,res,next)=>{
    res.send(err);
})

//listner

app.listen(9000,()=>{
    console.log('WELCOME');
})