const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('hello zhuzhu');
});
app.listen(3000, () => {
    console.log('3000服务器开启');
});