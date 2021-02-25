const express = require('express');
const app = express();
const ejs = require("ejs");
// 配置ejs模板
app.set("view engine", "ejs");
// 设置一个ejs使用的公共数据
app.locals.user = {
    uname: "Lily"
};
app.get("/index", (req, res) => {
    res.render("index")
});
app.listen(3000, () => {
    console.log("3000端口开启");
})