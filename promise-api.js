var fs = require('fs');
//EcmaScript 6 中新增了一个API Promise
//Promise 是一个构造函数 是一个容器里面存放着异步任务
//console.log(1);
//创建Promise容器
var p1 = new Promise(function (resolve, reject) {
    //console.log(2);
    fs.readFile('./callback/a.txt', 'utf8', function (err, data) {
        if (err) {
            //失败了，Promise容器中的任务失败了
            //console.log(err);
            //把容器的Pending 状态变为Rejected
            reject(err)
        } else {
            //console.log(3);
            //承诺容器中的任务成功了
            //console.log(data);
            //把容器的Pending 状态变为 Resolved
            //也就是说这里调用的resolve 方法实际上就是then方法传递的那个function
            resolve(data)
        }
    })
})

var p2 = new Promise(function (resolve, reject) {
    //console.log(2);
    fs.readFile('./callback/b.txt', 'utf8', function (err, data) {
        if (err) {
            //失败了，Promise容器中的任务失败了
            //console.log(err);
            //把容器的Pending 状态变为Rejected
            reject(err)
        } else {
            //console.log(3);
            //承诺容器中的任务成功了
            //console.log(data);
            //把容器的Pending 状态变为 Resolved
            //也就是说这里调用的resolve 方法实际上就是then方法传递的那个function
            resolve(data)
        }
    })
})

var p3 = new Promise(function (resolve, reject) {
    //console.log(2);
    fs.readFile('./callback/c.txt', 'utf8', function (err, data) {
        if (err) {
            //失败了，Promise容器中的任务失败了
            //console.log(err);
            //把容器的Pending 状态变为Rejected
            reject(err)
        } else {
            //console.log(3);
            //承诺容器中的任务成功了
            //console.log(data);
            //把容器的Pending 状态变为 Resolved
            //也就是说这里调用的resolve 方法实际上就是then方法传递的那个function
            resolve(data)
        }
    })
})

//console.log(4);
//p1就是那个Promise 当p1成功了 然后then 做指定的操作
//then的链式调用
p1
  .then(function(data){
      console.log(data);
      //当return 一个Promise对象的时候，后续的then中的方法的第一个参数会作为P2的Promise函数
      return p2
  },function(err){
      console.log('读取文件失败',err)
  })
  .then(function(data){
      console.log(data);
      return p3
  })
  .then(function(data){
    console.log(data);
    console.log('end');
  })

//列2
p1
  .then(function(data){
      console.log(data);
      return 123
  },function(err){
      console.log('读取文件失败',err)
  })
  .then(function(data){
      console.log(data) //data = 123
  })


  