import {connect} from "react-redux";
import Nav from "../components/nav";

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) =>{
    return {
        loadUsername:() => {
            dispatch ({type:'LOAD-USERNAME'})
        },
        logoutUser:() => {
            dispatch ({type:'LOGOUT'})
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Nav);