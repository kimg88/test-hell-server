const express = require('express');
const app = express();
const port = process.env.PORT || 3007;

app.get('/',(req, res)=> {
    res.send("hello");

})

app.listen(port, ()=> {
    console.log('port number : ', port);
})