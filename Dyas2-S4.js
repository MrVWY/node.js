var http = require('http');
var fs = require('fs');
var template = require('art-template');
var server = http.createServer();
var wwwdir = 'Z:/BaiduNetdiskDownload';
server.on("request",function(request,response){
    var url = request.url;
    fs.readFile('./template1.html',function(err , data){
        if (err) {
            return response.end("404 not Found.");
        }
        fs.readdir(wwwdir , function(err , files){
            if (err) {
                return response.end("dir not found")
            }
            var htmlStr = template.render(data.toString(),{
                title : '哈哈',
                files : files,
            })
            response.end(htmlStr);
        })
    })
})

server.listen(3001,function(){
    console.log("running...");
    
})