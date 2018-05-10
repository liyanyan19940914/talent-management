const db = require('../connection');

function updateSort(info,callback){
    let sql = "update sort set sortName='" + info.sortName + "'where sortName='" +info.oldSortName+"';";

    db.query(sql,(err,results,fields)=>{
        if(err){
            throw err;
        }else{
            callback(results);
        }
    })
}

module.exports = updateSort;