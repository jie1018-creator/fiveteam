const mongoose = require('mongoose');

let DB = mongoose.connect('mongodb://localhost/xiaozhu', { useNewUrlParser: true, useUnifiedTopology: true });
DB.then(() => {
    console.log('连接数据库成功');
}, () => {
    console.log('连接数据库失败');
});


const userSchema = new mongoose.Schema({
    uname: String,
    age: Number,
    gender: String
});

const User = mongoose.model('user', userSchema);
const User1 = mongoose.model('user1', userSchema);

const user = new User({
    uname: '猪猪组',
    age: 18,
    gender: '女'
});
const user1 = new User1({
    uname: '小猪',
    age: 20,
    gender: '女'
});
user.save();
user1.save();