const express = require('express');
const ejs = require('ejs');
const app = express();
const mongoose = require('mongoose');
app.set('view engine', 'ejs');
const DB = mongoose.connect('mongodb://localhost/database1', { useNewUrlParser: false, useUnifiedTopology: false });
DB.then(() => {
    console.log('数据库连接成功');
}, () => {
    console.log('数据库连接失败');
});
const userSchema = new mongoose.Schema({
    name: String,
    sex: String,
    age: Number,
    address: String
});
const User = mongoose.model('user', userSchema);
app.get('/', (req, res) => {
    User.find().then((data) => {
        console.log(data);
        res.render('index', { data: data })
    })
});
app.listen(3000, () => {
    console.log('服务器开启');
})