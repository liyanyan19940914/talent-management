const db = require('../connection');

function searchMessage(info,callback) {
    let sql = "select * from postCoverMessage where occupation like'"+"%"+info.info+"%"+"' or city like'" +"%"+info.info + "%"
        +"' or academic like'" +"%"+info.info + "%"+"';";

    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            callback(results);
        }
    })
}

module.exports = searchMessage;