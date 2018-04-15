import request from "superagent";

export default store => next => action => {
    switch(action.type){
        case 'FORGET-PSW':
            request.post('/forggetPsw')
                .send(action.data)
                .end((err,res) => {
                    next({type:'FORGET-PASSWORD'})
                })
            break;
    }
    next(action);
}