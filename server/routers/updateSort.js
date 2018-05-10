const express = require('express');
const route = express.Router();
const updateSortName = require('../dbs/updateSort');
const updateMessageJonType = require('../dbs/updateMessageJobType');

route.post('/modifySort',(req,res)=>{
    const info = req.body;
    updateSortName(info,(result,err) => {
        if(err){
            res.status(500);
        }else{
            updateMessageJonType(info,(results) => {
                let date = result.affectedRows;
                res.send({status:date});
            })
        }
    });
    // updateMessageJonType(info,(result) => {
    //     if(result.length === 0){
    //         res.status(500);
    //     }else{
    //         updateSortName(info,(result,err)=>{
    //             if(err){
    //                 res.status(500);
    //             }else{
    //                 let date = result.affectedRows;
    //                 res.send({status:date});
    //             }
    //         })
    //     }
    // })
});

module.exports = route;