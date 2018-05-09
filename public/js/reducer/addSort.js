module.exports = ( state = {isExitSort:false},action) => {
    switch(action.type){
        case 'ISEXIT-SORT':
            state.isExitSort = action.status;
            return Object.assign({},state);
        case 'RESET-SORT':
            state.isExitSort = action.data.isExitSort;
            return Object.assign({},state);
        default:
            return state;
    }
}