let db = require('./../connection');
let md = require('md5');

function inserSort(userInformation,callback) {
    let sql = "insert into sort(sortName)"+"values('" + userInformation.sortName + "')";
    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{
            callback({status:true})
        }
    })
}

module.exports = inserSort;
