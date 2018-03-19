let db = require('./../connection');

function insertDiscuess(info,callback) {
    let sql = 'insert into discuessList(message_id,user,discuess) values(' + info.message_id + ",'" + info.username + "','" +
            info.talk + "');";

    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            callback({status:true})
        }
    })
}

module.exports = insertDiscuess;