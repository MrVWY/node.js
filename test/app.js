var express = require('express');
var bodyparse = require('body-parser');
var router = require('./router');
var cors = require('cors');
var app = express();
app.use(bodyparse.urlencoded({extended:false}));
app.use(bodyparse.json());
app.use(cors({
    origin:['http://localhost:8080'],
    methods:['GET','POST'],
}))
app.use(router);
app.use(function(err,req,res,next){
    res.status(500).json({
        err_code: 0,
        msg: err.msg
    })
})
app.listen(3000,function(){
    console.log('app is running at port 3000 - 123123');
})