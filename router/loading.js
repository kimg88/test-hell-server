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
        return item.id === Number(req.params.id)
    });

    return res.status(200).json({
        result: search
    });
});

router.post('/v1',(req,res)=>{
    let newPerson = req.body.person;
    newPerson.id = db.length;
    db.push(newPerson);
    return res.status(200).json({
        result: db
    })
});

router.put('/v1',(req,res)=>{
    const id = Number(req.body.id);
    const changedName = req.body.name;
    
    const findId = db.findIndex(item=>{
        return item.id === id;
    })
    console.log(findId)
    if(findId === -1){
        return res.status(500).send('error code: abcd');
    }

    let result = db.map(item=>{
        if(item.id === id){
            item.name = changedName;
        }
        return item;
    });
    return res.status(200).json({
        result: result
    });
});


module.exports = router;