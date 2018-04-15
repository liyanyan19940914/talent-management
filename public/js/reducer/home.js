module.exports = (state={message:[]},action)=>{
    switch(action.type){
        // case 'GET_SUB_TASKS':
        //     state.message = action.status;
        //     state.index -= state.message.length;
        //     return {message:[...state.message],index:state.index};
        // case 'GET_ADD_TASKS':
        //     state.message = action.status;
        //     state.index += 2;
        //     return {message:[...state.message],index:state.index};
        case "ALL-COVER-MESSAGE":
            state.message = action.status;
            return {message:[...state.message]};
        default:
            return state;
    }

};
