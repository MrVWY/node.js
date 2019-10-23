
var express = require('express');
var app = express();


//公开指定目录，就可以直接通过/public/××的方式来访问public目录中的资源
app.use('/public/',express.static('./public/'));

//当省略第一个参数的时候，可以通过省略/public/的方式来访问
//app.use(express.static('./public/'));

app.get('/',function(request,response){
    response.send('Hello express')
})
app.get('/a',function(request,response){
    response.send('express is ')
})

app.listen(3000,function(){
    console.log('app is running at port 3000');
})