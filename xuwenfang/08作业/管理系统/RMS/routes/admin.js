const express = require("express");
const ejs = require("ejs");
const router = express.Router();
// 登录信息
router.get("/login", require("./admin-router/login"));
// 商品列表信息
router.get("/productlist", require("./admin-router/productlist"));
// 增加
router.get("/productadd", require("./admin-router/productadd"));
// 修改
router.get("/productedit", require("./admin-router/productedit"));
module.exports = router