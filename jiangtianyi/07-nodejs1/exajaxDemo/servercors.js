const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());

require('./DB/db.js');
let useSchema = require('./DB/userSchema');

app.get('/api/student/getStudent', (req, res) => {
    useSchema.find().then((data) => {
        res.send(data);
    })
});
app.listen(3008, () => {
    console.log('服务器开启');
})