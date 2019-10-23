//require 是一个方法 ， 他的作用是用来加载模块的 ，可以省略后缀名
//在node 中，模块有三种： 1、具名的核心模块 fs、http  2、用户自己编写的文件模块 3、没有全局作用域，只有模块作用域


console.log("a.start");
var bExports = require('./Dyas1-S3-2');
console.log("a.end");
console.log(bExports.foo);
console.log(bExports.add(10,20));
