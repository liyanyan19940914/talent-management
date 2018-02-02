import request from 'superagent';

export default store => next => action =>{
    switch(action.type){
        case "UPDATE-PASSWORD":
            request.post('/updatePsw')
                .send(action.date)
                .end((err,res)=>{
                    console.log(res.body.status);
                    next({type:'UPDATE-PSW',status:res.body.status})
                });
            break;
    }
    next(action);
}