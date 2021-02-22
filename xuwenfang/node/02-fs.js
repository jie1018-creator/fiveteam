// fs:file System 文件系统
// 读取文件
// 写入文件
// 追加内容
// 删除文件
// 重命名文件

// 引入模块
let fs = require("fs");
// console.log(fs);
// 读取文件
fs.readFile('./files/1.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        // console.log(data)
        console.log('读取文件成功')
    }
});
// 写入文件
fs.writeFile('./files/2.txt', '钢蛋儿是傻逼', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('写入成功')
    }
});
// 追加数据
fs.appendFile('./files/2.txt', '喜欢游戏', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('追加成功')
    }
});
// 删除文件
fs.unlink('./files/del.txt', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('删除成功')
    }
});
// 重命名文件
fs.rename('./files/rename.txt', './files/name.txt', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('重命名文件')
    }
});