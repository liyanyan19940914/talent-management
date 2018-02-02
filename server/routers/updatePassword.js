const express = require('express');
const route = express.Router();
const updatePassword = require('../dbs/updatePassword');

route.post('/updatePsw',(req,res)=>{
    const info = req.body;
    updatePassword(info,(result,err)=>{
        if(err){
            res.status(500);
        }else{
            let date = result.affectedRows;
            res.send({status:date});
        }
    })
});

module.exports = route;