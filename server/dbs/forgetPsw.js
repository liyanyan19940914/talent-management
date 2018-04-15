const db = require('../connection');
let md = require('md5');

function updatePassword(info,callback){
    let sql = "update user set password='" + md(info.password) + "'where username='" +info.username+"';";

    db.query(sql,(err,results,fields)=>{
        if(err){
            throw err;
        }else{
            callback(results);
        }
    })
}

module.exports = updatePassword;