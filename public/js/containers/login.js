import {connect} from "react-redux";
import Login from "../components/login";

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin:(data)=>{
            dispatch({type:'LOGIN',data})
        },
        resetLogin:(data)=>{
            dispatch({type:'RESET-LOGIN',data});
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);