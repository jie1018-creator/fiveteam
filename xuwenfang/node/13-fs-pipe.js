let fs = require('fs');
// 创建读取流
let cRS = fs.createReadStream('./files/1.txt');
// 创建写入流
let cWS = fs.createWriteStream('./files/2.txt');
// 读取流的方法pipe()
cRS.pipe(cWS);
// 读取完成
cRS.on('end', () => {
    console.log('读取完成');

});