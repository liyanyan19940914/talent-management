import request from 'superagent';

export default store => next => action => {
    switch(action.type){
        case "ADD-CLASS":
            request.post('/addSort')
                .send(action.data)
                .end((err,res) => {
                    next({type:"ISEXIT-SORT",status:res.body.data})
                });
            break;
    }
    next(action);
}