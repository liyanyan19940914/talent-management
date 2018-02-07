import request from 'superagent';

export default store => next => action => {
    switch (action.type){
        case "UPDATE-COVER-MESSAGE":
            request.post('/updateMessage')
                .send(action.date)
                .end((err,res)=>{
                    next({type:'ISUPDATE',status:res.body.status})
                });
            break;
    }
    next(action);
}