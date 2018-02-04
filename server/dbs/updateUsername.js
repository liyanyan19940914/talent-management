const db = require('../connection');

function updateUsername(info,callback){
    let sql = "update user set username='" + info.newUsername +"' where username='" +info.oldUsername +"'" ;

    db.query(sql,(err,results,fields)=>{
        if(err){
            throw err;
        }else{
            callback(results);
        }
    })
}

module.exports = updateUsername;