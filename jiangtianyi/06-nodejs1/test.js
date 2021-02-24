// 引入ejs模块
const ejs = require('ejs');

// var data = {
//     name: '许小猪'
// };

// var template = `<b><%=name%></b>`;
// var htmls = ejs.render(template, data);
// console.log(htmls);
// 设置数据
var data1 = {
    data1Script: `<script>document.write('你好啊')</script>`
};
// <%=转义
var template1 = `<p><%-data1Script%></p>`;
var template2 = `<p><%=data1Script%></p>`;

var htmls1 = ejs.render(template1, data1);
var htmls2 = ejs.render(template2, data1);
console.log(htmls1);
console.log(htmls2);