import request from "superagent";
import moment from "moment";

export default store=>next=>action=>{
    console.log('isexit')
    switch(action.type){
        case 'ISEXIT':
            request.post('/register')
                .send({"username":action.username})
                .end((err,res)=>{
                    next({type:'USER_EXIT',content:res.text})
                })
    }
    next(action);
}