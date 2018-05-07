import request from 'superagent';

export default store => next => action => {
    switch(action.type){
        case 'GET-PRACTICE-MESSAGE':
            request.post('/getAllCoverMessage')
                .end((err,res) => {
                    console.log(res.body.coverMessages);
                    next({type:'ALL-PRACTICE-MESSAGE',status:res.body.coverMessages});
                });
            break;
        case 'SEARCH-PRACTICE-INFO':
            request.post('/getSearch')
                .send(action.data)
                .end((err,res)=>{
                    console.log(res.body.coverMessage);
                    next({type:'ALL-PRACTICE-MESSAGE',status:res.body.coverMessage})
                });
            break;
    }
    next(action);
}