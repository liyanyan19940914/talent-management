import request from 'superagent';

export default store => next => action => {
    switch (action.type){
        case 'DOWNLOAD':
            request.post('/downloadFile')
                .send(action.data)
                .end((err,res) => {
                    next({type:'DOWNLOAD-FILE'});
                });
            break;
    }
    next(action);
}