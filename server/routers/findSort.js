const express = require('express');
const route = express.Router();
const findSort = require('./../dbs/findSort');

route.post('/searchSort',(req,res)=>{
    let data = req.body;
    findSort(data,(result,err)=>{
        if(err){
            res.status(500);
        }else{
            res.send({status:result})
        }
    })
})

module.exports = route;