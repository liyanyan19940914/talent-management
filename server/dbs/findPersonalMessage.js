const db = require('../connection');

function findPersonalMessage(info,callback) {
    let sql = "select * from postCoverMessage where userName='" + info.username +"'";

    db.query(sql,(err,results,fields)=>{
        if(err){
            throw err;
        }else{
            callback(results);
        }
    })
}

module.exports = findPersonalMessage;