const express = require("express");
const route = express.Router();
const insertDiscuess = require("../dbs/insertDiscuess");

route.post('/discuess',(req,res) => {
    let info = req.body;

    insertDiscuess(info,(result,err) => {
        if(err){
            res.status(500);
        }else{
            res.send(result);
        }
    })
})

module.exports = route;