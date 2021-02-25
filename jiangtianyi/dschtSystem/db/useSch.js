const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, '用户名不能为空'],
        minlength: [2, '用户名不能小于2位'],
        maxlength: [12, '用户名不能大于12位'],
        // 过滤空格
        trim: true
    },
    pic: File,
    price: Number,
    fee: Number
});
const User = mongoose.model('User', userSchema);
module.exports = User;