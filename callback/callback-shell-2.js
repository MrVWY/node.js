//通过回调嵌套的方式来保证顺序
var fs = require('fs');
fs.readFile('./a.txt','utf8', function (err, data) {
    if (err){
        //return console.log('read file fail');
        throw err 
    }
    console.log(data);
    fs.readFile('./c.txt','utf8', function (err, data) {
        if (err){
            //return console.log('read file fail');
            throw err 
        }
        console.log(data);
        fs.readFile('./b.txt','utf8', function (err, data) {
            if (err){
                //return console.log('read file fail');
                throw err 
            }
            console.log(data);
        })
    })
})



