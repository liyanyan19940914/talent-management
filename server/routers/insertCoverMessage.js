const express = require("express");
const route = express.Router();
const insertCoverMessage = require("../dbs/insertCoverMessage");

route.post('/postCoverMessage',(req,res)=>{
    const coverMessage = req.body;
    console.log("coverMessage",coverMessage);
    insertCoverMessage(coverMessage,(err,result)=>{
        if(err){
            res.status(500);
        }else{
            res.send(result);
        }
    })
});

module.exports = route;
