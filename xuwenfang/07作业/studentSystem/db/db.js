const mongoose = require("mongoose");
const newData = mongoose.connect("mongodb://localhost/students", { useNewUrlParser: false, useUnifiedTopology: false });
newData.then(() => {
    console.log("数据库连接成功")
}, () => {
    console.log("数据库连接失败")
});