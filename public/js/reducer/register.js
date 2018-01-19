module.exports = ( state = {isRegister:false},action) => {
    switch(action.type){
        case 'LOGIN-SHOW':
            state.isRegister = action.status;
            return Object.assign({},state);
        case 'RESET-REGISTER':
            state.isRegister = action.data.isRegister;
            return Object.assign({},state);
        // case 'ONEXIT':
        //     state.isExit = action.status;
        //     return Object.assign({},state);
        default:
            return state;
    }
}