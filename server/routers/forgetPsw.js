const express = require('express');
const route = express.Router();
const updatePassword = require('../dbs/forgetPsw');

route.post('/forgetPsw',(req,res) => {
    let info = req.body;
    console.log(info);
    updatePassword(info,(result,err)=>{
        if(err){
            res.status(500);
        }else{
            console.log(result);
            let date = result.affectedRows;
            res.send({status:date});
        }
    })
})

module.exports = route;