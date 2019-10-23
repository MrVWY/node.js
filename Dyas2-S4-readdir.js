var fs = require("fs");

fs.readdir("Z:/",function(err , files){
    if (err) {
        return console.log("dir not found");
    }
    console.log(files);
})