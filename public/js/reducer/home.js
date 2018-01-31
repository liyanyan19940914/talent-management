module.exports = (state={},action)=>{
    switch(action.type){
        case 'ALL-COVER-MESSAGE':
            return action.status;
        default:
            return state;
    }
};