const mongoose = require('mongoose');
const DB = mongoose.connect('mongodb://localhost/xiaozhu', { useNewUrlParser: false, useUnifiedTopology: false });
DB.then(() => {
    console.log('数据库连接成功');
}, () => {
    console.log('数据库连接失败');
});
const useSchema = new mongoose.Schema({
    uname: String,
    age: Number,
    gender: String
});
const User = mongoose.model('user', useSchema);
// 对数据进行排序
// User.find().sort({ 'age': 1 }).then((rel) => {
//     console.log(rel)
// });
// 删除一条数据
// User.deleteOne({ 'age': 20 }).then((rel) => {
//     console.log(rel)
// });
// 修改一条数据
// User.updateOne({ 'uname': '猪1' }, { 'uname': '猪2' }).then((rel) => {
//     console.log(rel)
// });
// 修改多条数据
// User.updateMany({ 'uname': '猪猪组' }, { 'uname': '芳芳' }).then((rel) => {
//     console.log(rel)
// });
// 创建一条新数据
User.create({
    uname: '文芳',
    age: 19,
    gender: '女'
}).then((rel) => {
    console.log(rel);
})