import request from "superagent";

export default store => next => action =>{
    console.log(action.type);
    console.log(action.username,action.password);
    switch(action.type){
        case 'REGISTER':
            request.post('/register')
                .send({username:action.data.username,password:action.data.password})
                .end((err,res)=>{
                    next({type:'LOING-SHOW'})
            });
            break;
    }
    next(action);
}