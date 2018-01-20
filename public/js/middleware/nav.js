import request from 'superagent';

export default store => next => action =>{
    console.log(action.type);
    switch(action.type){
        case 'LOAD-USERNAME':
            request.get('/loadUsername')
                .end((err,res) => {
                    next({type:'LOAD-LOGIN',status:res.body})
                });
            break;
    }
    next(action);
}