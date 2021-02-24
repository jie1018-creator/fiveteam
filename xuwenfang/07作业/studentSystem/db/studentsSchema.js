const mongoose = require("mongoose");
let userSchema = new mongoose.Schema({
    id: String,
    clazz: String,
    name: String,
    gender: String,
    age: Number,
    tel: Number,
    hobby: Array,
    address: String,
    remark: String,
    date: Date
});
let User = mongoose.model("students", userSchema);

// User.create([{
//     id: Date.now().toString() + 1,
//     clazz: "火花25",
//     name: "张美丽1",
//     gender: "女",
//     age: 21,
//     tel: 1711041014,
//     hobby: ["学习", "唱歌"],
//     address: "郑州市",
//     remark: "学生",
//     date: Date.now()
// }, {
//     id: Date.now().toString() + 2,
//     clazz: "火花25",
//     name: "张美丽2",
//     gender: "女",
//     age: 22,
//     tel: 1711041234,
//     hobby: ["敲代码", "唱歌"],
//     address: "天津市",
//     remark: "前端工程师",
//     date: Date.now()
// }, {
//     id: Date.now().toString() + 3,
//     clazz: "火花25",
//     name: "小明",
//     gender: "男",
//     age: 23,
//     tel: 1711041456,
//     hobby: ["睡觉", "唱歌"],
//     address: "郑州市",
//     remark: "全栈开发工程师",
//     date: Date.now()
// }]);
module.exports = User;