const express = require('express');
const app = express();
app.use('/login', (req, res) => {
    if (req.query.name == '许文芳' && req.query.password == 888) {
        res.send('登录成功')
    } else {
        res.send('用户名或密码错误');
    }
});
app.listen(3000, () => {
    console.log('服务器开启');
});