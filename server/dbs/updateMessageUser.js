const db = require('../connection');

function updateMessageUser(info,callback){
    let sql = "update postCoverMessage set userName='" + info.newUsername +"' where userName='" +info.oldUsername +"'" ;
    console.log(sql);

    db.query(sql,(err,results,fields)=>{
        if(err){
            throw err;
        }else{
            callback(results);
        }
    })
}

module.exports = updateMessageUser;