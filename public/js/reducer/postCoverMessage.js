module.exports = (state = {isSave:false,allSort:[]},action) => {
    switch(action.type){
        case "ADD-COVER-MESSAGE":
            state.isSave = action.status;
            return Object.assign({},state);
        case "RESET-MESSAGE":
            state.isSave = action.data.isSave;
            return Object.assign({},state);
        case "ALL-SORT":
            console.log('reduce',action.status);
            state.allSort = action.status;
            return {allSort:[...state.allSort]};
        default:
            return state;
    }
}