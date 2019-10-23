//用来获取机器的信息
var os = require('os');
//用来操作路径
var path = require('path');

//获取当前机器的cup信息
console.log(os.cpus());

//memory 内存
console.log(os.totalmem());

console.log( path.extname("D:/a/s/d/f"));