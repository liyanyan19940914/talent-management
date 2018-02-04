module.exports=(state={update:false,updateUsername:false},action)=>{
    switch(action.type){
        case 'UPDATE-PSW':
            state.update = action.status;
            return Object.assign({},state);
        case "RESET-UPDATE":
            state.update = action.date.update;
            return Object.assign({},state);
        case "UPDATE-UNM":
            state.updateUsername = action.status;
            return Object.assign({},state);
        case "RESET-USERNAME":
            state.updateUsername = action.date.updateUsername;
            return Object.assign({},state);
        default:
            return state;
    }
}