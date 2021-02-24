const express = require('express');
const app = express();
const ejs = require('ejs');
app.set('view engine', 'ejs');
const bodyParser = require('body-parser');
// 设置post获取的数据
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// 设置静态资源
app.use(express.static('public'));
const cors = require('cors');
// 设置跨域
app.use(cors());
// 设置一级路由
const admin = require('./routes/admin');
app.use('/admin', admin);

app.listen(3000, () => {
    console.log('3000服务器开启啦啦啦啦啦啦');
})