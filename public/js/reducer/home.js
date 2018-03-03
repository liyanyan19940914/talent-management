module.exports = (state={message:[]},action)=>{
    switch(action.type){
        case 'ALL-COVER-MESSAGE':
            state.message = action.status;
            return {message:[...state.message]};
        default:
            return state;
    }
};