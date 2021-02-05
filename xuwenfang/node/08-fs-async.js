let fs = require('fs');
let read = function(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf-8', (err, data) => {
            if (error) {
                reject(err);
            } else {
                resolve(error);
            }
        });
    });
};
// async 关键字标注function,通过await等待程序执行的结果
async function readf() {
    let files1 = await read('./files/1.txt');
    let files2 = await read('./files/2.txt');
    let files3 = await read('./files/name.txt');
    console.log(files1);
    console.log(files2);
    console.log(files3);
};
readf();