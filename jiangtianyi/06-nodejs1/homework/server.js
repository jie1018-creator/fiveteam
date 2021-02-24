const express = require('express');
const ejs = require('ejs');
const app = express();
const mongoose = require('mongoose');
app.set('view engine', 'ejs');
const DB = mongoose.connect('mongodb://localhost/xiaozhu', { useNewUrlParser: false, useUnifiedTopology: false });
DB.then(() => {
    console.log('数据库连接成功');
}, () => {
    console.log('数据库连接失败');
});
const userSchema = new mongoose.Schema({
    uname: String,
    age: Number,
    gender: String
});
const User = mongoose.model('user', userSchema);
app.get('/', (req, res) => {
    User.find().then((result) => {
        console.log(result);
        res.render('index', { result: result })
    })
});
app.listen(3000, () => {
    console.log('服务器开启');
})