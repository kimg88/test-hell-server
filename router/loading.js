const express = require('express');
const router = express.Router();


router.get('/v1',(req,res)=>{
    return res.json({
        name: 'a',
        password: 'bc',
        gender: 'male',
        age: 1,
        boolean: true
    });
});


router.get('/v1/:id',(req,res)=>{
    return res.json({
        name: 'a',
        password: 'bc',
        gender: 'male'
    });
});

router.get('/v2/:id',(req,res)=>{
    return res.send(`v2 ${req.params.id}`);
});

module.exports = router;