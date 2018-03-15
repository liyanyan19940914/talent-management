const express = require('express');
const route = express.Router();
const findUser = require('../dbs/findUser');
let md = require('md5');

route.post('/login',(req,res)=>{
    let userInformation = req.body;
    findUser(userInformation,(result)=>{
        console.log(result);
        if(result.length === 0){
            res.send({status:'用户不存在'});
        }
        else{
            if(result[0].password !== md(userInformation.password)){
                res.send({status:'密码错误，请重新输入'});
            }else{
                res.cookie('username',userInformation.username,{path:'/'});
                res.send({status:true});
            }
        }

    })
})

module.exports = route;