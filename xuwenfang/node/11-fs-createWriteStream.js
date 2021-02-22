let fs = require('fs');
let dataInfo = '不乱于心,不困于情,不畏将来,不念过往,如此安好\n';
// 创建一个写入流
let cc = fs.createWriteStream('./files/cw.txt');
// 1.写入开始
for (let i = 0; i < 10000; i++) {
    cc.write(dataInfo);
}
// 2.写入结束
// cWS.end();
// 3.写入完成
cc.on('finish', () => {
    console.log('写入文件完成');
})