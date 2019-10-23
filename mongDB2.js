var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//连接数据库
//指定连接的数据库不需要存在，当你插入第一条数据之后就会自动被创建出来
mongoose.connect('mongodb://localhost/itcast')

//设计集合结构（表结构）
var blogSchema = new Schema({
    title: String,
    author: String,
    body: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
})

var userSchema = new Schema({
    username: {
        type: String,
        required: true //表示必须有该字段
    },
    password: {
        type: String,
        required: true //表示必须有该字段
    },
    email: {
        type: String
    }
})

//将文档结构发布为模型
var User = mongoose.model('User', userSchema)

//增加数据
var admin = new User({
    username: 'A',
    password: 'B',
    email: '123@123.com'
})

admin.save().then(() => console.log('OK'))

//查询数据
User.find(function (err, ret) {
    if (err) {
        console.log(err);
    } else {
        console.log(ret);
    }
})

User.find({
    username = 'A'
}, function (err, ret) {
    if (err) {
        console.log(err);
    } else {
        console.log(ret);
    }
})

User.findOne({
    username = 'A'
}, function (err, ret) {
    if (err) {
        console.log(err);
    } else {
        console.log(ret);
    }
})

//删除数据
User.remove({
    username: 'A'
}, function (err, ret) {
    if (err) {
        console.log('fail');
    } else {
        console.log('sucess');
        console.log(ret);
    }
}
)

//