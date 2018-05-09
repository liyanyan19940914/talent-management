import request from 'superagent';

export default store => next => action => {
    switch(action.type){
        case "GET-ALL-SORT":
            request.get('/getAllSort')
                .end((err,res) => {
                    console.log("addsort",res.body.sort);
                    next({type:"ALL-SORT",status:res.body.sort})
                });
            break;
    }
    next(action);
}