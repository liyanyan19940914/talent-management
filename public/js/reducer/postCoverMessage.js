module.exports = (state = {isSave:false},action) => {
    switch(action.type){
        case "ADD-COVER-MESSAGE":
            state.isSave = action.status;
            return Object.assign({},state);
        case "RESET-MESSAGE":
            state.isSave = action.data.isSave;
            return Object.assign({},state);
        default:
            return state;
    }
}