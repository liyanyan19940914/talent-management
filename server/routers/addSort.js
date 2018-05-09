const express = require("express");
const route = express.Router();
const addSort = require("../dbs/addSort");
const findSort = require('../dbs/findSort');

route.post('/addSort',(req,res) => {
    const data = req.body;
    console.log(data);
    findSort(data,(result)=>{
        if(result.length != 0){
            res.send({status:'类名已存在，请重新输入！'});
        }else{
            addSort(data,(result,err) => {
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