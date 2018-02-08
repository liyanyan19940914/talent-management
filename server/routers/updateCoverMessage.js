const express = require('express');
const route = express.Router();
const updateCoverMessage = require('../dbs/updateCoverMessage');

route.post('/updateMessage',(req,res)=>{
    const info = req.body;
    console.log(info);
    updateCoverMessage(info,(result,err)=>{
        if(err){
            res.status(500);
        }else{
            let date = result.affectedRows;
            res.send({status:date});
        }
    })
})

module.exports = route;