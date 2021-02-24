const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.send(200, 'login成功');
});

module.exports = router;