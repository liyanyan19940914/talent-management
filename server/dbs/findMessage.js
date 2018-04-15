const db = require('./../connection');

function findCoverMessage(callback) {
    let sql = "select * from postCoverMessage order by time desc limit 0,6;";

    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            callback(results);
        }
    })
}

module.exports = findCoverMessage;