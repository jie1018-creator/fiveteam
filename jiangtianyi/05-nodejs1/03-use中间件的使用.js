let express = require('express');
let app = express();
app.use((req, res, next) => {
    console.log(req.url);
    next();
});
app.use('/login', (req, res, next) => {
    console.log(req.url);
    next();
});
app.get('/login', (req, res) => {
    console.log(req.query);
    res.status(200).send(req.query);
});
app.listen(3000, () => {
    console.log('服务器开启');
});