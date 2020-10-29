const express = require('express');
const router = express.Router();


// CRUD => create, read, update, delete
// Rest API
let db = [
    {
        id: 0,
        name: 'kim',
        age: 30
    },
    {
        id: 1,
        name: 'park',
        age: 30
    },
];
/*
router.get('/v1',(req,res)=>{
    return res.json({
        name: 'a',
        password: 'bc',
        gender: 'male',
        age: 1,
        boolean: true
    });
});
router.get('/v2/:id',(req,res)=>{
    return res.send(`v2 ${req.params.id}`);
});
*/

router.get('/v1',(req,res)=>{
    return res.json({
        result: db
    });
});

router.get('/v1/:id',(req,res)=>{
    const search = db.filter((item)=>{
        item.id === req.params.id
    });

    return res.json({
        result: search
    });
});

router.put('/v1',(req,res)=>{
    const id = req.body.id;
    const changedName = req.body.name;
    db = db.map(item=>{
        if(item.id === id){
            item.name = changedName;
        }
        return item;
    })
    return res.json({
        result: db
    });
});

module.exports = router;