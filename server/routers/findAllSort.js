const express = require('express');
const route = express.Router();
const findAllSort = require('./../dbs/findAllSort');

route.get('/getAllSort',(req,res)=>{
    findAllSort((result,err)=>{
        if(err){
            res.status(500);
        }else{
            res.send({sort:result})
        }
    })
})

module.exports = route;