// 删除一个非空文件夹
let fs = require('fs');

function delDir(path) {
    // 是否存在路径
    if (fs.existsSync(path)) {
        // 返回一个包含“指定目录下所有文件名称”的数组对象
        // forEach中函数中参数(元素,索引,数组)
        fs.readdirSync(path).forEach(function(file) {
            var newPath = path + "/" + file;
            // 判断newPath是不是一个文件夹
            if (fs.statSync(newPath).isDirectory()) {
                // 递归调用本身
                delDir(newPath);
            } else {
                // 是一个文件直接删除
                fs.unlinkSync(newPath)
            };
        });
        fs.rmdirSync(path)
    } else {
        console.log('路径不存在')
    }
};
delDir("./files/css");