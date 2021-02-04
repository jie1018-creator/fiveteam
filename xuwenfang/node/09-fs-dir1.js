let fs = require('fs');
const { callbackify } = require('util');
// stat(path,callback):判定是文件还是目录
// callback(error, stats):
// stats.isDirectory()
// stats.isFile()
fs.stat('./files/1.txt', (error, stats) => {
    if (error) {
        console.log(error);
    } else {
        if (stats.isDirectory()) {
            console.log('是一个目录');
        } else if (stats.isFile()) {
            console.log('是一个文件');
        }
    };
});

// 1.创建文件夹
fs.mkdir('./files/css', (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('目录创建成功');
    }
});
// 2.删除文件夹
fs.rmdir('./files/css', (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('目录删除成功');
    }
});
// 3.如何删除一个不是空的文件夹
fs.rmdir('./files', (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('目录删除成功');
    }
});
// 4.读取文件夹
fs.readdir('./files', (error, files) => {
    if (error) {
        console.log(error);
    } else {
        // files是一个数组---所有文件的文件名[ '1.txt', '2.txt', 'name.txt' ]
        console.log(files);
        console.log(files[2]);
    }
});