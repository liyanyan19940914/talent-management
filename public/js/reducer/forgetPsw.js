module.exports = (state= {isForgetPsw:false},action) => {
    switch(action.type) {
        case 'FORGET-PASSWORD':
            state.isForgetPsw = action.status;
            return Object.assign({},state);
        case "RESET-FORGET-PSW":
            state.isForgetPsw = action.data.isForgetPsw;
            return Object.assign({},state);
        default:
            return state;
    }
};