import request from 'superagent';

export default store => next => action => {
    switch (action.type){
        case 'DOWNLOAD':
            request.post('/downloadFile')
                .send(action.data)
                .end((err,res) => {
                    console.log('download',res.text);
                    next({type:'DOWNLOAD-FILE',status:res.text});
                });
            break;
        case 'SEND-DISCUESS':
            request.post('/discuess')
                .send(action.data)
                .end((err,res) => {
                    next({type:'DISCUSS-LIST',status:res.body.status});
                });
            break;
        case 'GET-ALL-DISCUSS':
            console.log('discuss',action.data);
            request.post('/getAllDiscuss')
                .send(action.data)
                .end((err,res) => {
                    console.log(res.body.status);
                    next({type:'ALL-DISCUSS',status:res.body.status});
                });
            break;
    }
    next(action);
}