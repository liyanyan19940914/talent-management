const db = require('./../connection');

function findAllSort(callback) {
    let sql = "select * from sort;" ;

    db.query(sql,(err,results,fields)=>{
        if(err){
            throw err;
        }else{
            callback(results)
        }
    })
}

module.exports = findAllSort;