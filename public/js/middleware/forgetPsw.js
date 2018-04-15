import request from "superagent";

export default store => next => action => {
    switch(action.type){
        case 'FORGET-PSW':
            request.post('/forgetPsw')
                .send(action.data)
                .end((err,res) => {
                    console.log(res.body.status);
                    next({type:'FORGET-PASSWORD',status:res.body.status})
                });
            break;
    }
    next(action);
}