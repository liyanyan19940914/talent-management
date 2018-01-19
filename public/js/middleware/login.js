import request from "superagent";

export default store => next => action =>{
    switch(action.type){
        case "LOGIN":
            request.post('/login')
                .send({username:action.data.username,password:action.data.password})
                .end((err,res) => {
                    next({type:'ONLOGIN',status:res.body})
                })
            break;
    }
    next(action);
}