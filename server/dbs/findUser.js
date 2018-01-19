const db = require('./../connection');

function findUser(data,callback) {
    let sql = "select * from user where username='" + data.username + "'";

    db.query(sql,(err,results,fields)=>{
        if(err){
            throw err;
        }else{
            callback(results)
        }
    })
}

module.exports = findUser;