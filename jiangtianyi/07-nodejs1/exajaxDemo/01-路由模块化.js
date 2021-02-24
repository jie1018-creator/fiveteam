const express = require('express');
const app = express();
const admin = require('./routes/admin.js');
app.use('/admin', admin);

app.listen(3000, () => {
    console.log('3000服务器开启');
})