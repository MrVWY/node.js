//加载http模块
var http = require('http');

//使用http.createServer()方法创建一个web服务器
var sever = http.createServer();

//监听
sever.on('request',function(request,response){
    //127.0.0.1:3000/  / 
    //127.0.0.1:3000/a /a
    //127.0.0.1:3000/foo/a  /foo/a   
    console.log("收到的路径为" + request.url);
    if (request.url === '/login') {
        response.write('Please ');
        response.write(' login');
        response.end();
    } else if (request.url === '/register') {
        response.end('Please register');
    }else if (request.url === '/products') {
        var products = [
            {
                name :'A',
                price : 1000
            },
            {
                name :'B',
                price : 2000
            },
            {
                name :'C',
                price : 3000
            },
            {
                name :'D',
                price : 4000
            },
            {
                name :'E',
                price : 5000
            },
        ]
        response.end(JSON.stringify(products));
    }else {
        response.write('Hello ');
        response.write(' world');
        response.end();
    }
})

//绑定端口号，启动服务器
sever.listen(3000,function(){
     console.log("启动成功")
     
})