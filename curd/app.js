var express = require('express');
var router = require('./router');
var bodyparse = require('body-parser');
var app = express();
app.engine('html',require('express-art-template'));

//公开指定目录，就可以直接通过/public/××的方式来访问public目录中的资源
app.use('/public/',express.static('./public/'));
app.use('/node_modules/',express.static('./node_modules/'));
//router(app);
//配置模板引擎和body-parser一定要在app.use(router)挂载路由之前
//把路由容器挂载到app服务中
app.use(bodyparse.urlencoded({extended:false}));
app.use(bodyparse.json());

app.use(router);
app.listen(3000,function(){
    console.log('app is running at port 3000');
})