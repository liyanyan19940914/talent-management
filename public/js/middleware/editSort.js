import request from 'superagent';

export default store => next => action => {
    switch(action.type){
        case "MODIFY-SORT":
            request.post('/modifySort')
                .send(action.data)
                .end((err,res) => {
                    console.log(res.body.status);
                    next({type:"EDIT-SORT",status:res.body.status})
                });
            break;
    }
    next(action);
}