import request from 'superagent';

export default store => next => action => {
    switch(action.type){
        case 'GET-ALL-COVER-MESSAGE':
            request.post('/getAllCoverMessage')
                .end((err,res) => {
                    console.log(res.body.coverMessages);
                    next({type:'ALL-COVER-MESSAGE',status:res.body.coverMessages});
                })
            break;
    }
    next(action);
}