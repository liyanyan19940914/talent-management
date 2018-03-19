module.exports = (state = {isSend:false,discuss:[]},action) => {
    switch (action.type){
        case "DISCUSS-LIST":
            state.isSend = action.status;
            return Object.assign({},state);
        case "RESET-DISCUSS":
            state.isSend = action.data.isSend;
            return Object.assign({},state);
        case 'ALL-DISCUSS':
            state.discuss = action.status;
            return {discuss:[...state.discuss]};
        default:
            return state;
    }
}