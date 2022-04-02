var express = require('express');

var path = require('path')


var app = express();

//middelwares

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));


app.use(express.urlencoded({extended:false}))

app.use(express.json())

var studentRouter = require('./Router/user');

app.use('/user',studentRouter);



app.listen(2000,()=>{
    console.log('WELCOME')
})