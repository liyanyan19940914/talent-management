const express = require('express');
const route = express.Router();
const updateUsername = require('../dbs/updateUsername');

route.post('/updateUsername',(req,res)=>{
    const info = req.body;
    updateUsername(info,(result,err)=>{
        if(err){
            res.status(500);
        }else{
            let date = result.affectedRows;
            res.send({status:date});
        }
    })
});

module.exports = route;