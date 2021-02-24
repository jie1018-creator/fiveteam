const express = require("express");
const ejs = require("ejs");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.set("view engine", "ejs")
app.use(express.static("public"))

// 配置路由
const admin = require("./routes/admin");
app.use("/admin", admin)

app.listen(3000, () => {
    console.log("3000端口开启");
})