var express = require('express');

var path = require('path')


var app = express();

//middelwares

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));



var studentRouter = require('./routes/student');

app.use('/student',studentRouter);



app.listen(5000,()=>{
    console.log('WELCOME')
})