const db = require('../connection');

function searchMessage(info,callback) {
    let sql = "select * from postCoverMessage where occupation='"+info.info+"' or city='" +info.info + "';";

    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            callback(results);
        }
    })
}

module.exports = searchMessage;