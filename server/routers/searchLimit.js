const express = require('express');
const route = express.Router();
const findMessage = require('../dbs/searchLimit');
const findCoverMessage = require('./../dbs/findMessage');

route.get('/showMessage', (req, res)=> {
    var index = req.query.index;
    findCoverMessage((result,err)=>{
        if(err){
            res.status(500);
        }
        if (index == 0) {
            index = +index - +2;
        }
        let i = +index + +2;
        if (i >= result.length) {
            index = +index - +2;
        }
    });
    index = +index + +2;
    findMessage(index,(result,err) => {
        if(err){
            res.status(500);
        }else{
            res.send({status:result});
        }
    })

});
route.get('/showSubMessage', (req, res)=> {
    let index = req.query.index;
    if (index < 0) {
        index = 0;
    }
    if (index == 0) {
        index = +index + +2;
    }
    index = +index - +2;
    findMessage(index,(result,err) => {
        if(err){
            res.status(500);
        }else{
            res.send({status:result});
        }
    })
});

module.exports = route;