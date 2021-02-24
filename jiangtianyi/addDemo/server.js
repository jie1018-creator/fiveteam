const express = require('express');
const ejs = require('ejs');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    fs.readFile('./data/students.json', 'utf-8', (err, data) => {
        if (err) {
            res.status(500).end();
            console.log(err);
        } else {
            dataObj = JSON.parse(data);
            // console.log(dataObj);
            // ejs.renderFile('./views/index.ejs', dataObj, (err, str) => {
            //     if (err) {
            //         res.writeHead(500, {
            //             'Content-Type': 'text/plain;charset="utf-8"'
            //         });
            //         res.end('500 - application ERROR');
            //     } else {
            //         res.writeHead(200, {
            //             'Content-Type': 'text/html;charset="utf-8"'
            //         });
            //         res.end(str);
            //     }
            // });
            res.render('index', dataObj);
        }
    })
});
app.get('/login', (req, res) => {
    res.render('login', {
        title: '登录'
    })
})
app.post('/submit', (req, res) => {
    res.render('mainPage', {
        title: '登录成功',
        uname: req.body.uname
    });
});

app.listen(3000, () => {
    console.log('服务器开启');
})