const db = require('./../connection');

function findSort(data,callback) {
    let sql = "select * from sort where sortName='" + data.sortName + "';";

    db.query(sql,(err,results,fields)=>{
        if(err){
            throw err;
        }else{
            callback(results)
        }
    })
}

module.exports = findSort;