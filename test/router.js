var express = require('express');
var fs = require('fs')
var router = express.Router();
router.get('/api', function (request, response) {
    console.log("1");
})
router.get('/data',function(request,response,next){
    console.log("1");
    fs.readFile('./db.json',function(err ,data){
        if (err){
            return next(err)
        }
        console.log("1");
        
        response.status(200).send(data)
        //console.log(JSON.parse(data));
    })
})
module.exports = router