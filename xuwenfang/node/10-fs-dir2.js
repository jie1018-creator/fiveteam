let fs = require('fs');
// recursive: true:递归的创建
fs.mkdir('./css/index.css', {
    recursive: true
}, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('目录创建成功');
    }
});



// 读取文件夹文件的类型
fs.readdir('./files', {
    withFileTypes: true
}, (error, files) => {
    if (error) {
        console.log(error);
    } else {
        console.log(files);
    }
});