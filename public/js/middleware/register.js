import request from "superagent";

export default store => next => action =>{
    console.log(action.type);
    switch(action.type){
        case 'REGISTER':
            request.post('/register')
                .send({username:action.username,password:action.password})
                .end((err,res)=>{
                    next({type:'LOING-SHOW'})
            });
            break;
    }
    next(action);
}