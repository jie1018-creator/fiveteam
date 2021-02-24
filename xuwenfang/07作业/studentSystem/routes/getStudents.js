const express = require("express");
const router = express.Router();
// 引入自定义模块
require("../db/db.js");
let user = require('../db/studentsSchema.js');
// 显示所有学生信息
router.get("/getStudent", (req, res) => {
    if (req.query.id) {
        user.find({ id: req.query.id }).then((data) => {
            res.send(data)
        })
    } else {
        user.find().then((data) => {
            var results = [];
            var myname = req.query.name;
            if (myname) {
                data.forEach(function(item) {
                    if (item.name.includes(myname)) {
                        results.push(item);
                    };
                });
            } else {
                results = data;
            };
            res.status(200).send(results);
        });
    }
});
// 添加数据
router.post("/addStudent", (req, res) => {
    req.body.id = Date.now().toString();
    user.create(req.body).then((data) => {
        res.send(data);
        console.log(data);
    });
});
// 删除数据
router.get("/removeStudent", (req, res) => {
    if (req.query.id) {
        user.deleteOne(req.query).then(() => {
            res.send("success")
        });
    } else {
        res.send("删除错误!!!!!")
    }
});

//更新数据
router.post("/updateStudent", (req, res) => {
    if (req.body.id) {
        user.updateOne({ id: req.body.id }, req.body).then(() => {
            res.status(200).send("ok");
        });
    } else {
        res.status(500).send("error");
    }
});

// module.exports 提供了暴露接口的方法
module.exports = router;