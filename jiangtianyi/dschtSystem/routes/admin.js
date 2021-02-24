const express = require('express');
const routes = express.Router();

routes.get('/login', require('./admin-do/login.js'));
routes.get('/productlist', require('./admin-do/productlist.js'))
routes.get('/productadd', require('./admin-do/productadd.js'))
routes.get('/productedit', require('./admin-do/productedit.js'))
module.exports = routes;