let db = require('./../connection');

function insertCoverMessage(data,callback){
    let sql = "insert into postCoverMessage(userName,name,sex,tel,email,job,schoolName,date1,date2,major,academic," +
        "projectName,standard,rol,describes,summary,duty,jobType,city,pay,industry,occupation,hobby,evaluate,fileUpload,time)"+
        "values('" + data.username + "','" + data.name + "','" + data.sex + "','" + data.tel + "','" + data.email + "','" + data.job
        + "','" + data.schoolName + "','" + data.date1 + "','"  + data.date2 + "','"  + data.major + "','" + data.academic + "','"
        + data.projectName + "','" + data.standard + "','" + data.rol + "','" +data.describe + "','" + data.summary + "','" + data.duty
        + "','" + data.jobType + "','" + data.city + "','" + data.pay + "','" + data.industry + "','" + data.occupation + "','"
        + data.hobby + "','" + data.evaluate + "','" + data.resume + "','" + data.time +"')";

    db.query(sql,function (err,results,fields) {
        if(err){
            throw err;
        }else{

            callback({status:true});
        }
    })
}

module.exports = insertCoverMessage;