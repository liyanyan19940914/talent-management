const express = require('express');
const route = express.Router();
const findCoverMessage = require('./../dbs/findMessage');

route.post('/getAllCoverMessage',(req,res)=>{
    findCoverMessage((result,err)=>{
        if(err){
            res.status(500);
        }else{
            res.send({coverMessages:result})
        }
    })
})

module.exports = route;