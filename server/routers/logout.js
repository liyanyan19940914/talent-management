const express = require('express');
const route = express.Router();

route.get('/logout',(req,res) => {
    if(req.cookies.username){
        req.cookies.username = null;
        res.send(req.cookies.username);
    }else{
        res.status(500).send("");
    }
});

module.exports = route;