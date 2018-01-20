module.exports = (state = {isLogin:false,loginUser:''},action) => {
    switch(action.type){
        case 'ONLOGIN':
            state.isLogin = action.status;
            state.loginUser = action.loginUser;
            return Object.assign({},state);
        case 'RESET-LOGIN':
            state.isLogin = action.data.status;
            return Object.assign({},state);
        default:
            return state;
    }
}