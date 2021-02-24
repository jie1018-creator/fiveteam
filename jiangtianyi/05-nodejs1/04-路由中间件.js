const express = require('express');
const app = express();
app.get('/find/:id/name/:uname', (req, res) => {
    console.log(req.params);
    res.send(req.params);
});
app.listen(3000, () => {
    console.log('服务器开启');
});