// 引入fs模块
let fs = require('fs');
// 引入express框架
let express = require('express');
// 创建express实例
let app = express();
// 引入bodyParser：获取post的请求参数
let bodyParser = require('body-parser');
// 设置静态资源
app.use(express.static(__dirname));
// 配置post请求参数
// extended：false参数键值对的数据为String或者是Array
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// 跨域请求
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Content-Type', 'application/json');
    next();
});
app.get('/api/zhao/getstudent', (req, res) => {
    fs.readFile('./data/student.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('文件出错' + err);
        } else {
            data = JSON.parse(data); //将数据转化为对象
            console.log(data);
            // 创建一个空数组， 保存查找的结果
            let results = [];
            //判断判断id是否存在，通过遍历查找符合的结果
            if (req.query.id) { //通过id查找
                data.forEach((value, index) => {
                    if (value.id == req.query.id) { //地址栏的id和数据中的id是否相等
                        results.push(value); //符合条件的数据存入results数组
                    }
                })
            } else if (req.query.name) { //通过name查找
                data.forEach((value, index) => {
                    if (value.name == req.query.name) {
                        results.push(value); //符合条件的数据存入数组
                    }
                })
            } else {
                // 请求没有传递参数，查找全部
                results = data;
            }
            res.status(200).send(results);
        }
    })
});
// post 添加数据
app.post('/api/zhao/addstudent', (req, res) => {
    //读取文件的数据
    fs.readFile('./data/student.json', (err, data) => {
        if (err) {
            console.log('读取文件出错' + err);
            res.send('服务器出错')
        } else {
            data = JSON.parse(data);
            // 建立空数组，并且自己添加的数据传入这个空数组
            let results = req.body;
            // 利用时间戳，生成数据的id
            results.id = new Date().getTime();
            // 将数据添加进文件数据
            data.push(results);
            // 将数据写入文件
            fs.writeFileSync('./data/student.json', JSON.stringify(data));
            console.log(results);
            // 设置状态码，并把数组传入到前台
            res.status(200).send(results)
        }
    })
});
app.listen(3000, () => {
    console.log('服务器开启，端口号为3000');
})