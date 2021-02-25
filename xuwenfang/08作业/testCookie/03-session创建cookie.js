const express = require("express");
const session = require("express-session");
const app = express();
app.use(session({
    secret: "start",
    name: "Jack",
    //  强制保存session,默认true不保存
    resave: false,
    //  强制保存未初始化的session
    saveUninitialized: true,
    cookie: {
        //  https协议
        //   secure: true,
        maxAge: 10 * 1000
    },
    //  强制重置cookie是过期时间
    rolling: true
}));
// 设置登录信息
app.get("/login", (req, res) => {
    // 设置session属性
    req.session.uname = "zhangmeili";
    res.send("登陆成功")
});
// 判断用户是否登陆过
app.get("/mainpage", (req, res) => {
    if (req.session.uname) {
        res.send("欢迎" + req.session.uname + "登录")
    } else {
        res.send("请重新登陆")
    }
})
app.listen(3000, () => {
    console.log('3000端口已经开启可以溜溜');
});