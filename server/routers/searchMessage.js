const express = require('express');
const route = express.Router();
const searchMessage = require('../dbs/searchMessage');

route.post('/getSearch',(req,res)=>{
    const info = req.body;
    console.log(info);
    searchMessage(info,(result,err)=>{
        if(err){
            res.status(500);
        }else{
            console.log(result);
            res.send({coverMessage:result})
        }
    })
});

module.exports = route;