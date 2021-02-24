const express = require('express');
const fs = require('fs');
const ejs = require('ejs');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    fs.readFile('./data/fruit.json', 'utf-8', (err, data) => {
        if (err) {
            res.status(500).end();
            console.log(err);
        } else {
            fruitData = JSON.parse(data);
            console.log(fruitData);
            res.render('index', { fruitData: fruitData });
        }
    })
});
app.get('/login', (req, res) => {
    res.render('login', {
        title: '登录'
    })
});
app.post('/submit', (req, res) => {
    res.render("mainPage", {
        title: '登录成功',
        uname: req.body.uname
    })
})
app.listen(3000, () => {
    console.log('服务器开启');
});