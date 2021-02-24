const fs = require('fs');

function emptyDir(filePath) {
    let files = fs.readdirSync(filePath)
    console.log(files);
    files.forEach((file, index) => {
        let nextFilePath = `${filePath}/${file}`
            // let nextFilePath = filePath + '/' + file;
        let states = fs.statSync(nextFilePath);
        if (states.isDirectory()) {
            emptyDir(nextFilePath);
        } else {
            fs.unlinkSync(nextFilePath);
            console.log(`删除文件${nextFilePath}成功`);
        }
    });
    fs.rmdirSync(filePath);
    console.log(`删除文件${filePath}成功`);
}
emptyDir('./1')