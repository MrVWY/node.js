var fs = require('fs');
var dbpath = './db.json'
//获取所有学生列表
exports.find = function (callback) {
    fs.readFile(dbpath, 'utf8', function (err, data) {
        if (err) {
            return callback(err);
        }
        callback(null, JSON.parse(data).students)
    })
}

exports.findById = function (id, callback) {
    fs.readFile(dbpath, 'utf8', function (err, data) {
        if (err) {
            return callback(err);
        }
        var students = JSON.parse(data).students;
        var result = students.find(function (item) {
            return item.id === parseInt(id)
        })
        callback(null, result)
    })
}

//添加保存学生
exports.save = function (student, callback) {
    fs.readFile(dbpath, 'utf8', function (err, data) {
        if (err) {
            return callback(err);
        }
        var students = JSON.parse(data).students;
        student.id = students[students.length - 1].id + 1
        students.push(student);
        var filedata = JSON.stringify({
            students: students
        });
        fs.writeFile(dbpath, filedata, function (err) {
            if (err) {
                return callback(err);
            }
            callback(null);
        })
    })
}
//更新学生
exports.updata = function (student, callback) {
    fs.readFile(dbpath, 'utf8', function (err, data) {
        if (err) {
            return callback(err);
        }
        var students = JSON.parse(data).students;
        student.id = parseInt(student.id);
        //es6 提供的find
        var stu = students.find(function (item) {
            return item.id === student.id;
        })
        for (var key in student) {
            stu[key] = student[key]
        }
        var filedata = JSON.stringify({
            students: students
        });
        fs.writeFile(dbpath, filedata, function (err) {
            if (err) {
                return callback(err);
            }
            callback(null);
        })
    })
}
//删除学生
exports.delete = function (id,callback) {
    fs.readFile(dbpath, 'utf8', function (err, data) {
        if (err) {
            return callback(err);
        }
        var students = JSON.parse(data).students;
        //es6 提供的findIndex
        var deleteID = students.findIndex(function (item) {
            return item.id === parseInt(id);
        })
        students.splice(deleteID,1);
        var filedata = JSON.stringify({
            students: students
        });
        fs.writeFile(dbpath, filedata, function (err) {
            if (err) {
                return callback(err);
            }
            callback(null);
        })
    })
}