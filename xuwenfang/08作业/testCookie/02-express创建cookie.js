const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
// 拦截使用cookieParser 并设置签名
app.use(cookieParser("start"));


app.get("/setCookie", (req, res) => {
    res.cookie("zhangmeili", "123456", {
        maxAge: 24 * 60 * 60 * 1000,
        signed: true
    });
    res.send("写入成功");
});
app.get("/getCookie", (req, res) => {
    // 启用签名后,获取不到
    //  res.send(req.cookies);
    res.send(req.signedCookies)
})
app.listen(3000, () => {
    console.log("3000端口开启成功!")
})