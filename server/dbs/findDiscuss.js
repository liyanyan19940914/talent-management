const db = require('../connection');

function findDiscuss(info,callback){
    let sql = 'select * from discuessList where message_id=' + info.message_id + " order by date desc;";

    db.query(sql,(err,results,fields) => {
        if(err){
            throw err;
        }else{
            callback(results);
        }
    })
};

module.exports = findDiscuss;