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
                    next({type:'DISCUESS-LIST',status:res.body.state});
                });
            break;
    }
    next(action);
}