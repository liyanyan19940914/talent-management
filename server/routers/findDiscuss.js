const express = require('express');
const route = express.Router();
const findDiscuss = require('../dbs/findDiscuss');

route.post('/getAllDiscuss',(req,res) => {
    let info = req.body;

    findDiscuss(info,(result,err) => {
        if(err){
            res.status(500);
        }else{
            res.send({status:result});
        }
    })
});

module.exports = route;