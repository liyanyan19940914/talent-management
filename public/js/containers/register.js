import {connect} from "react-redux";
import Register from "../components/register";

const mapStateToProps = (state) => {
    console.log(state)
    return state;
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onRegister:(data)=>{
            dispatch({type:'REGISTER',data})
        },
        resetRegister:(data)=>{
            dispatch({type:'reset-register',data})
    }
    //     isExit:(data)=>{
    //         dispatch({type:'ISEXIT',data})
    //     },
    //     resetExit:(data)=>{
    //         dispatch({type:'RESETEXIT',data})
    // }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Register);