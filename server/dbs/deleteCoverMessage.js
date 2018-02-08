const db = require('../connection');

function deleteCoverMessage(info,callback) {
    let sql = "delete from postCoverMessage where message_id="+info.id;

    db.query(sql,(err,results,fields)=>{
        if(err){
            throw err;
        }else{
            callback(results);
        }
    })
}

module.exports = deleteCoverMessage;