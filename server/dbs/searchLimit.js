let db = require('./../connection');

function findMessage(index,callback){

    let sql = 'SELECT * FROM postCoverMessage limit ' + index + ',2;';
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            callback(results);
        }
    })
}

module.exports = findMessage;