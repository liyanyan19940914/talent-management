const express = require('express');
const route = express.Router();
const updateUsername = require('../dbs/updateUsername');
const updateMessageUser = require('../dbs/updateMessageUser');

route.post('/updateUsername',(req,res)=>{
    const info = req.body;
    updateMessageUser(info,(result) => {
        if(result.length === 0){
            res.status(500);
        }else{
            updateUsername(info,(result,err)=>{
                if(err){
                    res.status(500);
                }else{
                    let date = result.affectedRows;
                    res.send({status:date});
                }
            })
        }
    })
});

module.exports = route;