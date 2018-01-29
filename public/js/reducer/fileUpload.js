module.exports = (state={},action)=>{
    switch(action.type){
        case 'FILE-UPLOAD':
            return action.data;
    }
    return state;
}