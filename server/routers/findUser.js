const express = require('express');
const route = express.Router();
const findUser = require('./../dbs/findUser');

route.post('/exitUser',(req,res)=>{
    let username = req.body;
    findUser(username,(result,err)=>{
        if(err){
            res.status(500);
        }
        if(result){
            res.send("用户名已被注册，请重新输入");
        }
        else{
            res.send("false")
        }
    })
});

module.exports = route;