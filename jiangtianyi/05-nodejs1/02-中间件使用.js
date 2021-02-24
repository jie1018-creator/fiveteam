const express = require('express');
const app = express();
app.get('/zhuzhu', (req, res, next) => {
    req.name = '许猪猪';
    next();
});
app.get('/zhuzhu', (req, res) => {
    res.status(200).send(req.name);
    // res.status(200).send('uu');
});
app.listen(3000, () => {
    console.log('3000服务器开启');
});