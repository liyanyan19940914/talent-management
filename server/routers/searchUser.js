const express = require('express');
const route = express.Router();
const findUser = require('../dbs/findUser');

route.post('/login',(req,res)=>{
    let userInformation = req.body;
    findUser(userInformation,(result)=>{
        console.log(result);
        if(result.length === 0){
            res.send('用户不存在');
        }
        else{
            if(result.password !== userInformation.password){
                res.send('密码错误，请重新输入');
            }else{
                res.cookie('username',userInformation.username,{path:'/'});
                res.send(true);
            }
        }

    })
})

module.exports = route;