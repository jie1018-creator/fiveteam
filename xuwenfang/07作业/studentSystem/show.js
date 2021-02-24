const express = require("express");
const app = express();
// 解决跨域
const cors = require("cors");
app.use(cors());
// body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// 设置一级路由
app.use('/api/student', require("./routes/getStudents"))
app.listen(3008, () => {
    console.log("3008端口开启...")
});