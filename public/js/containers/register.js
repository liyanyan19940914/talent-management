import {connect} from "react-redux";
import Register from "../components/register";

const mapDispatchToProps = (dispatch) =>{
    return {
        onRegister:(data)=>{
            dispatch({type:'REGISTER',data})
        }
    }
};

export default connect(()=>{return {}},mapDispatchToProps)(Register);