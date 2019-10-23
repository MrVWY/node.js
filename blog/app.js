var express = require('express');
var path = require('path');
var app = express();
var router = require('./router');
var bodyparse = require('body-parser');
var session = require('express-session');
app.use('/public/',express.static(path.join(__dirname,'./public/')));
app.use('/node_modules/',express.static(path.join(__dirname,'./node_modules/')));
app.engine('html',require('express-art-template'));
app.set('views',path.join(__dirname,'./views/'));
app.use(bodyparse.urlencoded({extended:false}));
app.use(bodyparse.json());
app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:false
}))
app.use(router);
app.use(function(req , res){
    res.render('errerrerrerrerrerrerrerrerrerrerrerr')
});
app.use(function(err,req,res,next){
    res.status(500).json({
        err_code: 0,
        msg: err.msg
    })
})
app.listen(3000,function(){
    console.log('app is running at port 3000');
})