var fs = require('fs');
//不一定按照文件的顺序abc来读取 取决于文件的大小
fs.readFile('./a.txt','utf8', function (err, data) {
    if (err){
        //return console.log('read file fail');
        throw err 
    }
    console.log(data);
})

fs.readFile('./c.txt','utf8', function (err, data) {
    if (err){
        //return console.log('read file fail');
        throw err 
    }
    console.log(data);
})

fs.readFile('./b.txt','utf8', function (err, data) {
    if (err){
        //return console.log('read file fail');
        throw err 
    }
    console.log(data);
})