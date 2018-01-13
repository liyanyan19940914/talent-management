import {connect} from "react-redux";
import Register from "../components/register";

const mapDispatchToProps = (dispatch) => {
    return {
        isExit:(username)=>{
            dispatch({type:'ISEXIT',username})
        }
    }
}
export default connect(()=>{return {}},mapDispatchToProps)(Register);