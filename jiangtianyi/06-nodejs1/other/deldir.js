// 引入fs模块
let fs = require('fs');

function delDir(filePath) {
    let files = fs.readdirSync(filePath); //读filePath中的文件，以数组形势返回
    console.log(files);
    files.forEach((file) => {
        let newPath = filePath + '/' + file; //拼出文件夹下小文件的路径
        let stats = fs.statSync(newPath); //判断小文件的状态
        if (stats.isDirectory()) { //如果小文件也是一个文件夹的话
            delDir(newPath); //回调
        } else {
            fs.unlinkSync(newPath); //如果小文件是一个文件的话，删除这个文件
        }
    });
    fs.rmdirSync(filePath); //最后删除空的文件夹
    console.log(filePath);
};
delDir('./1')