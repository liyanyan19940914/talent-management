module.exports = (state={isUpdateSort:false},action)=>{
    switch(action.type){
        case 'EDIT-SORT':
            state.isUpdateSort = action.status;
            return Object.assign({},state);
        case 'RESET-SORT':
            state.isUpdateSort = action.data.isUpdateSort;
            return Object.assign({},state);
        default:
            return state;
    }
}