import request from 'superagent';

export default store => next => action => {
    switch(action.type){
        case "GET-ALL-SORT":
            request.get('/getAllSort')
                .end((err,res) => {
                    next({type:"ALL-SORT",status:res.body.sort})
                });
            break;
        case "SEARCH-SORT":
            request.post('/searchSort')
                .send(action.data)
                .end((err,res) => {
                    next({type:"ALL-SORT",status:res.body.status});
                });
            break;
    }
    next(action);
}