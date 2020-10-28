const express = require('express');
const router = express.Router();
const loading = require('./router/loading.js');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.get('/', (req, res)=>{
    res.send(`hi`);
})

app.use('/loading',loading);

app.listen(port, ()=> {
    console.log('server is started at port', port);
})






