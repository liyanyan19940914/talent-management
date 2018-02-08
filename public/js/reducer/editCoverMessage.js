module.exports = (state={isUpdate:false},action)=>{
    switch(action.type){
        case 'ISUPDATE':
            state.isUpdate = action.status;
            return Object.assign({},state);
        case 'RESET-UPDATE':
            state.isUpdate = action.date.isUpdate;
            return Object.assign({},state);
        default:
            return state;
    }
}