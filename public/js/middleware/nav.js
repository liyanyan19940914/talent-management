import request from 'superagent';

export default store => next => action => {
    if(action.type === "LOAD-USERNAME"){
        request.get('/legal-username')
            .end((err,res)=>{
                console.log('legal username',res.text);
                next({type:'USERNAME-GOT',status:res.text})
            })
    }
    next(action);
}

