import request from 'superagent';

export default store => next => action =>{
    switch(action.type){
        case 'POST-COVER-MESSAGE':
            request.post('/postCoverMessage')
                .send({username:action.data.username,name:action.data.name,sex:action.data.sex,tel:action.date.tel,email:action.date.email,
                schoolName:action.data.schoolName,date1:action.data.date1,date2:action.data.date2,major:action.data.major,academic:action.data.academic,
                projectName:action.data.projectName,standard:action.data.standard,describe:action.data.describe,summary:action.data.summary,duty:action.data.duty,
                jobType:action.data.jobType,city:action.data.city,pay:action.dta.pay,industry:action.data.industry,occupation:action.date.occupation,
                hobby:action.data.hobby,evaluate:action.data.evaluate,resume:action.data.fileUpload})
                .end((err,res)=>{
                    next({type:'ADD-COVER-MESSAGE',status:res.body})
                });
            break;
    }
    next(action);
}