module.exports = (state={allSort:[]},action)=>{
    switch(action.type){
        case "ALL-SORT":
            console.log('reduce',action.status);
            state.allSort = action.status;
            return {AllSort:[...state.allSort]};
        default:
            return state;
    }

};
