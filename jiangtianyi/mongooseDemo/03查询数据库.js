const mongoose = require('mongoose');
const DB = mongoose.connect('mongodb://localhost/xiaozhu', { useNewUrlParser: false, useUnifiedTopology: false });
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

User.find().then((result) => {
    console.log(result);
});