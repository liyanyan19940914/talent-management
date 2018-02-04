let db = require('./../connection');
let md = require('md5');

function insertUser(userInformation,callback) {
    let sql = "insert into user(username,password)"+"values('" + userInformation.username + "','"
        + md(userInformation.password) + "')";
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            callback({status:true})
        }
    })
}

module.exports = insertUser;
