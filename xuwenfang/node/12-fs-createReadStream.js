let fs = require('fs');
let cc = fs.createReadStream('./files/cw.txt');
let str = '';
// 记录读取的次数
var flag = 0;
// data:用于读取数据
cc.on('data', (dataStr) => {
    str += dataStr;
    flag++;
});
cc.on('end', () => {
    console.log(str);
    console.log(flag);

});
cc.on('error', (error) => {
    console.log(error);
});