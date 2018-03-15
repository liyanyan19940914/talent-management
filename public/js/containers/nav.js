import {connect} from "react-redux";
import Nav from "../components/nav";

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) =>{
    return {
        loadUsername:() => {
            dispatch ({type:'LOAD-USERNAME'})
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Nav);