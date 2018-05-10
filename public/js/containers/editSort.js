import {connect} from 'react-redux';
import EditSort from '../components/editSort';

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        editSort:(data) => {
            dispatch({type:"MODIFY-SORT",data:data});
        },
        resetUpdateSort:(data) => {
            dispatch({type:"RESET-SORT",data:data});
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(EditSort);