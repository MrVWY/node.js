var express = require('express');
var bodyparse = require('body-parser');
var app = express();
app.use(bodyparse.urlencoded({extended:false}));
app.use(bodyparse.json());
app.engine('html',require('express-art-template'));
//公开指定目录，就可以直接通过/public/××的方式来访问public目录中的资源
app.use('/public1/',express.static('./public1/'));
//app.set('views','./views');
var comments = [{
    name: '张三',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三2',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三3',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三4',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三5',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  }
]

app.get('/',function(request , response){
    response.render('index.html',{
        comments:comments
    });
})

app.get('/admin',function(request,response){
    response.render('admin/index.html',{
        title:'管理'
    })
})

app.get('/post',function(request,response){
    response.render('post.html')
})

app.post('/post',function(request,response){
    console.log(request.body);
})

// app.get('/pinglun',function(request,response){
//     console.log(request.query);
//     var comment = response.query;
//     comment.dateTime = '2017-11-5 10:58:51';  
//     comments.unshift(comment);
//     response.redirect('/');
// })

app.listen(3000,function(){
    console.log('app is running at port 3000...');
})