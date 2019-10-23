var express = require('express');
var User = require('./model/user')
var router = express.Router();
router.get('/', function (request, response) {
    console.log(request.session.islogin);
    response.render('index.html')
})
router.get('/login', function (request, response) {
    response.render('login.html')
})
router.post('/login', function (request, response,next) {
    var body = request.body;
    User.findOne({
        email:body.email,
        password:body.password
    },function(err , user){
        if (err) {
            return next(err);
        }
        if (!user){
            return response.status(200).json({
                err_code:1,
                msg:'account or password err'
            })
        }
        response.session.user = user
        response.status(200).json({
            err_code:1,
            msg:ok
        })
    })
})
router.get('/register', function (request, response) {
    response.render('register.html')
})
router.post('/register', function (request, response,next) {
    var body = request.body;
    User.findOne({
        $or: [
            {
                email: body.email
            },
            {
                nickname: body.nickname
            }
        ]
    }, function (err, data) {
        if (err) {
            return next(err);
        }
        console.log('1');
        if (data) {
            return response.status(200).json({
                err_code: 1,
                foor: 'account is exsis'
            })
        }
        console.log('ok');
        // //response.status(200).send('{"success": true}')
        // response.status(200).json({
        //     success: true,
        //     foor: 'A'
        // })
        new User(body).save(function (err,user) {
            if (err) {
                return next(err);
            }
            request.session.user = user;
            response.status(200).json({
                err_code: 0,
                foor: 'A'
            })
        })
    })
})
module.exports = router