var express = require('express');
var app = express();
//注意先后顺序  next：调用下一个中间件
app.use(function(res,req,next){
    console.log("1");
    next()
})
app.use(function(res,req,next){
    console.log("2");
})
app.listen(3000,function(){
    console.log('app is running at port 3000');
})