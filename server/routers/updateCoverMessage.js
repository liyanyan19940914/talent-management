const express = require('express');
const route = express.Router();
const updateCoverMessage = require('../dbs/updateCoverMessage');

route.post('/updateMessage',(req,res)=>{
    const info = req.body;
    updateCoverMessage(info,(result,err)=>{
        if(err){
            res.status(500);
        }else{
            console.log(result);
            res.send(result);
        }
    })
})

module.exports = route;