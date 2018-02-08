const express = require('express');
const route = express.Router();
const deleteCoverMessage = require('../dbs/deleteCoverMessage');

route.post('/deleteMessage',(req,res)=>{
    const info = req.body;
    deleteCoverMessage(info,(result,err)=>{
        if(err){
            res.status(500);
        }else{
            let date = result.affectedRows;
            res.send({status:date});
        }
    })
})

module.exports = route;