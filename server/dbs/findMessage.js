const db = require('./../connection');

function findCoverMessage(callback) {
    let sql = "select * from postCoverMessage";

    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            callback(results);
        }
    })
}

module.exports = findCoverMessage;