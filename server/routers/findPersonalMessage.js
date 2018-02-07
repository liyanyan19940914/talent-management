const express = require('express');
const route = express.Router();
const findPersonalMessage = require('../dbs/findPersonalMessage');

route.post('/personalSend',(req,res)=>{
    const info = req.body;
    findPersonalMessage(info,(result,err)=>{
        if(err){
            res.status(500);
        }else{
            res.send({status:result});
        }
    })
})

module.exports = route;