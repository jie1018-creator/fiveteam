// 读取文件的同步操作
let fs = require('fs');
let data = fs.readFileSync('./files/1.txt', 'utf-8');
console.log(data);
try {
    let data = fs.readFileSync('./files/5.txt', 'utf-8');
    console.log(data);
} catch (err) {
    console.log(err)
}