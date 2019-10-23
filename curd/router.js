var fs = require('fs');
//1、express 提供更好的router
var express = require('express');
var router = express.Router();
var students = require('./student')
router.get('/students', function (request, response) {
    fs.readFile('./db.json', 'utf8', function (err, data) {
        // if (err) {
        //     return response.status(500).send('sever err')
        // }
        // console.log(data);
        // response.render('index.html', {
        //     fruits: [
        //         "苹果",
        //         "香蕉",
        //         "橘子"
        //     ],
        //     students: JSON.parse(data).students
        // })
        students.find(function (err, students) {
            if (err) {
                return response.status(500).send('sever err')
            }
            response.render('index.html', {
                fruits: [
                    "苹果",
                    "香蕉",
                    "橘子"
                ],
                students: students
            })
        })
    })
})

router.get('/students/new', function (request, response) {
    response.render('new.html')
})

router.post('/students/new', function (request, response) {
    console.log(request.body);
    new students(request.body).save(function (err) {
        if (err) {
            return response.status(500).send('sever err')
        }
        response.redirect('/students')
    })

})

router.get('/students/edit', function (request, response) {
    console.log(request.query.id);
    students.findById(request.query.id, function (err, student) {
        if (err) {
            return response.status(500).send('sever err')
        }
        console.log(student);
        response.render('edit.html', {
            student: student
        })
    })
})

router.post('/students/edit', function (request, response) {
    students.findByIdAndUpdate(request.body.id, request.body, function (err) {
        if (err) {
            return response.status(500).send('sever err')
        }
        response.redirect('/students');
    })
})

router.get('/students/delete', function (request, response) {
    console.log(request.query.id);
    students.findByIdAndRemove(request.query.id, function (err) {
        if (err) {
            return response.status(500).send('sever err')
        }
        response.redirect('/students');
    })
})

//2、将router导出
module.exports = router