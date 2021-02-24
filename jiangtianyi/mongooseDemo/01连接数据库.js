const mongoose = require('mongoose');
let DB = mongoose.connect('mongodb://localhost/zhuzhu', { useNewUrlParser: true, useUnifiedTopology: true });
console.log(DB);

DB.then(() => {
    console.log('连接数据库成功');
}, () => {
    console.log('连接数据库失败');
});