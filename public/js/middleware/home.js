import request from 'superagent';

export default store => next => action => {
    switch(action.type){
        case 'GET-ALL-COVER-MESSAGE':
            request.post('/getAllCoverMessage')
                .end((err,res) => {
                    console.log(res.body.coverMessages);
                    next({type:'ALL-COVER-MESSAGE',status:res.body.coverMessages});
                });
            break;
        case 'SEARCH-INFO':
            request.post('/getSearch')
                .send(action.data)
                .end((err,res)=>{
                    console.log(res.body.coverMessage);
                    next({type:'ALL-COVER-MESSAGE',status:res.body.coverMessage})
                });
            break;
        // case 'SHOW-ADD':
        //     request.get('/showMessage')
        //         .query({"index":action.index})
        //         .end((err, res)=> {
        //
        //             next({type: 'GET_ADD_TASKS', status: res.body.status});
        //         });
        //     break;
        // case 'SHOW-SUB':
        //     console.log('index',action.index)
        //     request.get('/showSubMessage')
        //         .query({"index":action.index})
        //         .end((err, res)=> {
        //             console.log("show-sub",res.body.status);
        //             next({type: 'GET_SUB_TASKS', status: res.body.status});
        //         });
        //     break;
    }
    next(action);
}