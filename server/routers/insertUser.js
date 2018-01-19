const express = require("express");
const route = express.Router();
const insertUser = require("../dbs/insertUser");
const findUser = require('../dbs/findUser');

route.post('/register',(req,res) => {
    const userInformation = req.body;
    findUser(userInformation,(result)=>{
        if(result.length != 0){
            res.send({status:'用户名已被注册，请重新输入！'});
        }else{
            insertUser(userInformation,(result,err) => {
                if(err){
                    res.status(500);
                }else{
                    res.send(result);
                }
            })
        }
    })

});

module.exports = route;