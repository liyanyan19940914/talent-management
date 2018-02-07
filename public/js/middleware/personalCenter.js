import request from 'superagent';

export default store => next => action =>{
    switch(action.type){
        case "UPDATE-PASSWORD":
            request.post('/updatePsw')
                .send(action.date)
                .end((err,res)=>{
                    next({type:'UPDATE-PSW',status:res.body.status})
                });
            break;
        case "UPDATE-USERNAME":
            request.post('/updateUsername')
                .send(action.date)
                .end((err,res)=>{
                    next({type:'UPDATE-UNM',status:res.body.status})
                })
            break;
        case 'PERSONAL-SEND':
            request.post('personalSend')
                .send(action.data)
                .end((err,res)=>{
                    console.log(res.body.status);
                    next({type:'PERSONAL-MESSAGE',status:res.body.status})
                })
    }
    next(action);
}