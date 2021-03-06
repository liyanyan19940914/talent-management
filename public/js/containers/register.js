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
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Register);