const db = require('../connection');

function updateCoverMessage(ele,callback) {
    let sql = "update postCoverMessage set name='"+ele.name+"'sex='"+ele.sex+"'tel='"+ele.tel+"'email='"+ele.email+"'job='"+ele.job
        +"'schoolName='"+ele.schoolName+"'date1='"+ele.date1+"'date2='"+ele.date2+"'major='"+ele.major+"'academic='"
        +ele.academic+"'projectName='"+ele.projectName+"'standard='"+ele.standard+"'rol='"+ele.rol+"'describes='"+
        ele.describes+"&summary="+ele.summary+"&duty="+ele.duty+"&jobType="+ele.jobType+"&city="+ele.city+
        "'pay='"+ele.pay+"'industry='"+ele.industry+"'occupation='"+ele.occupation+"'hobby='"+ele.hobby+
        "'evaluate='"+ele.evaluate+"' where message_id=" + ele.id;

    db.query(sql,(err,results,fields)=>{
        if(err){
            throw err;
        }else{
            callback(results);
        }
    })
}

module.exports = updateCoverMessage;