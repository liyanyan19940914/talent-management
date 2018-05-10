import {connect} from 'react-redux';
import AdminHome from '../components/adminHome';

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllSort:() => {
            dispatch({type:"GET-ALL-SORT"});
        },
        searchSort:(data) => {
            dispatch({type:"SEARCH-SORT",data:data});
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AdminHome);