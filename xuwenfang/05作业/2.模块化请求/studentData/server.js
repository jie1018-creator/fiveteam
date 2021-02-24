let fs = require("fs");
let express = require("express");
let bodyParser = require("body-parser")
let app = express();
let ejs = require("ejs")
    // 设置的静态资源
app.use(express.static(__dirname));
// 配置post请求参数
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
// 解决跨域
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET", "POST", "PUT", "OPTIONS", "DELETE");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Content-Type", "application/json");
    next();
});

app.get('/api/getstudent', (req, res) => {
    fs.readFile('./data/students.json', 'utf-8', (error, data) => {
        if (error) {
            console.log(error);
        } else {
            data = JSON.parse(data);
            let newData = [];
            if (req.query.name) {
                data.forEach((value, index) => {
                    if (value.name == req.query.name) {
                        newData.push(value);
                    }
                })
            } else {
                results = data;
            }
            res.status(200).send(results);
        };
    });
});

// post 添加数据
app.post('/api/addstudent', (req, res) => {
    fs.readFile('./data/students.json', (error, data) => {
        if (error) {
            console.log(error);
        } else {
            data = JSON.parse(data);
            let newData = req.body;
            data.push(newData);
            // 写入文件
            fs.writeFileSync('./data/students.json', JSON.stringify(data));
            res.status(200).send(results)
        }
    })
});
// 监听端口
app.listen(3000, () => {
    console.log("后台服务器开启...")
})