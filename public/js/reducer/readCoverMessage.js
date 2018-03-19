module.exports = (state = {isSend:false},action) => {
    switch (action.type){
        case "DISCUSS-LIST":
            state.isSend = action.status;
            return Object.assign({},state);
        case "RESET-DISCUSS":
            state.isSend = action.data.isSend;
            return Object.assign({},state);
        default:
            return state;
    }
}