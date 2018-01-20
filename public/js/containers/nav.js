import {connect} from "react-redux";
import Nav from "../components/nav";

const mapDispatchToProps = (dispatch) =>{
    return {
        loadUsername:() => {
            dispatch({type:'LOAD-USERNAME'})
        }
    }
}

export default connect(()=>{return {}},mapDispatchToProps)(Nav);