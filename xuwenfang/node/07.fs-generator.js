let fs = require('fs');
let read = function(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf-8', (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
};


let rename = function(oldFile, newFile) {
    return new Promise((resolve, reject) => {
        fs.rename(oldFile, newFile, (err) => {
            if (error) {
                reject(error);
            } else {
                resolve('重命名成功');
            }
        });
    });
};
// 申明一个generator函数
function* readfi() {
    yield read('./files/1.txt');
    yield read('./files/2.txt');
    yield rename('./files/rename.txt', './files/name.txt');
};
// 按照此方法来接受结果
var relf = readfi();
// 执行
relf.next().value.then(data => {
    console.log(data);
    return relf.next().value;
}).then(data => {
    console.log(data);
    return relf.next().value;
}).then(data => {
    console.log(data);
});