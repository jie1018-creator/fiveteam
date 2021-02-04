let fs = require('fs');
// fs.readFile('./files/1.txt', 'utf-8', (error, data) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(data);
//     }
// });
// fs.rename('./files/rename.txt', './files/name.txt', (error) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('重命名成功');
//     }
// });




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
// 重命名文件
let rename = function(oldFile, newFile) {
    return new Promise((resolve, reject) => {
        fs.rename(oldFile, newFile, (error) => {
            if (error) {
                reject(error);
            } else {
                resolve('重命名成功');
            }
        });
    });
};



read('./files/1.txt').then((data) => {
    console.log(data);
    return read('./files/2.txt');
}).then((data) => {
    console.log(data);
    return rename('./files/rename.txt', './files/name.txt');
}).then((data) => {
    console.log(data);
});