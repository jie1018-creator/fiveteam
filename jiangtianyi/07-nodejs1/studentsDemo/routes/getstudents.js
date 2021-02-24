const express = require('express');
const User = require('../db/useSch');
const routes = express.Router();

require('../db/db.js');
let useSc = require('../db/useSch');
// 查询数据
routes.get('/getStudent', (req, res) => {
    let sObj = req.query;
    if (sObj.id) {
        useSc.find({ id: sObj.id }).then((data) => {
            console.log(data);
            res.send(200, data);
        });
    } else {
        useSc.find().then((data) => {
            var result = [];
            var myname = req.query.name;
            if (myname) {
                data.forEach(function(value) {
                    if (value.name.includes(myname)) {
                        result.push(value);
                    }
                })
            } else {
                result = data;
            }
            res.send(result);
        })
    }

});
// 添加数据
routes.post('/addStudent', (req, res) => {
    console.log(req.body);
    req.body.id = Date.now().toString();
    User.create(req.body).then(() => {
        res.send(200, '添加成功')
    })
});

// 删除数据
routes.get('/removeStudent', (req, res) => {
    User.deleteOne(req.query).then(() => {
        res.send(200, '删除成功')
    })
});
// 修改数据
routes.post('/updateStudent', (req, res) => {
    let olddata = req.body;
    if (req.body.id) {
        User.updateOne({ id: olddata.id }, olddata).then(() => {
            res.send(200, '修改成功')
        })
    }
});
module.exports = routes;