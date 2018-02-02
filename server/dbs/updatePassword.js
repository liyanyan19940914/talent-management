const db = require('../connection');

function updatePassword(info,callback){
    let sql = "update user set password='" + info.password + "'where username='" +info.username+"' and "+"password='"+info.oldpsw+"'";

    db.query(sql,(err,results,fields)=>{
        if(err){
            throw err;
        }else{
            callback(results);
        }
    })
}

module.exports = updatePassword;