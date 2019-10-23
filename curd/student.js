var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/itcast');
var Schema = mongoose.Schema;
var studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: Number,
        enum: [0, 1], //限制为0或1
        required: true
    },
    age: {
        type: Number,
    },
    hobbies: {
        type: String,
    },
})
//导出模型构造函数
module.exports = mongoose.model('Student', studentSchema);