module.exports = (state = {isLogin:false},action) => {
    switch(action.type){
        case 'ONLOGIN':
            state.isLogin = action.status;
            return Object.assign({},state);
        case 'RESET-LOGIN':
            state.isLogin = action.data.status;
            return Object.assign({},state);
        default:
            return state;
    }
}