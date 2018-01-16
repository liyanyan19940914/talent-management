module.exports = ( state = {isRegister:false},action) => {
    switch(action.type){
        case 'LOGIN-SHOW':
            state.isRegister = action.status;
            return Object.assign({},state);
        default:
            return state;
    }
}