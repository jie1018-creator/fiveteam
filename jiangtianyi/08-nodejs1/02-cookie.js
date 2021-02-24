const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.get('/setCookie', (req, res) => {
    res.cookie('xiaozhuzhu', '5201314', {
        maxAge: 7 * 24 * 60 * 60 * 1000
    })
    res.send('设置成功')
});
app.get('/getCookie', (req, res) => {
    res.send(req.cookies);
});
app.listen(3000, () => {
    console.log('3000端口已开启');
});