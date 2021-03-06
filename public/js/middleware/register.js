import request from "superagent";

export default store => next => action =>{
    console.log(action.type);
    switch(action.type){
        case 'REGISTER':
            request.post('/register')
                .send({username:action.data.username,password:action.data.password})
                .end((err,res)=>{
                    next({type:'LOGIN-SHOW',status:res.body.status})
                });
            break;
    }
    next(action);
}