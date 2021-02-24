const mongoose = require('mongoose');
let DB = mongoose.connect('mongodb://localhost/xiaozhu', { useNewUrlParser: false, useUnifiedTopology: false });
DB.then(() => {
    console.log('数据库连接成功');
}, () => {
    console.log('数据库连接失败');
});