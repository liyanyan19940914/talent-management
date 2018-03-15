module.exports = (state={},action) => {
    switch(action.type){
        case 'USERNAME-GOT':
            return action.status;
        case 'USERNAME-GO':
            return action.status;
        default:
            return state;
    }
}