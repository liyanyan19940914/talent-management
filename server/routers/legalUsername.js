const express = require("express");
const route = express.Router();

route.get('/legal-username',(req,res) => {
    if(req.cookies.username){
        console.log(req.cookies.username,"cookie");
        res.send(req.cookies.username)
    }else{
        res.status(500).send('')
    }
})

module.exports = route;