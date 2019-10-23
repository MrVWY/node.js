var fs = require('fs');
function readfile(filepath){
    return new Promise(function (resolve, reject) {
        //console.log(2);
        fs.readFile(filepath, 'utf8', function (err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

readFile('./callback/a.txt')
    .then(function(data){
        console.log(data);
        return readFile('./callback/b.txt')
    })
    .then(function(data){
        console.log(data);
        return readFile('./callback/c.txt')
    })
    .then(function(data){
        console.log(data);
    })