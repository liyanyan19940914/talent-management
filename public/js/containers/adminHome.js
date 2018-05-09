import {connect} from 'react-redux';
import AdminHome from '../components/adminHome';

const mapStateToProps = (state) => {
    console.log(state.adminHome);
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllSort:() => {
            dispatch({type:"GET-ALL-SORT"});
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AdminHome);