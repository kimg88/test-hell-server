const express = require('express');
const { get } = require('./router/loading.js');
const router = express.Router();
const loading = require('./router/loading.js');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3003;






app.use('/loading', loading);
app.use(bodyParser.json());

app.get('/', (req, res)=> {
    res.send('hello world my world');
})



app.listen(port, ()=> {
<<<<<<< HEAD
    console.log('server start port number is a:', port);
=======
    console.log('server start port number:', port);
>>>>>>> b8b0ad4901ef051b5322bf656c29fb6d4412809b
})