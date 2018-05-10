const db = require('../connection');

function updateMessageJobType(info,callback){
    let sql = "update postCoverMessage set industry='" + info.sortName + "'where industry='" +info.oldSortName+"';";

    db.query(sql,(err,results,fields)=>{
        if(err){
            throw err;
        }else{
            callback(results);
        }
    })
}

module.exports = updateMessageJobType;