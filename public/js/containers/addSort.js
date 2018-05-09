import {connect} from 'react-redux';
import AddSort from '../components/addSort';

const mapStateToProps = (state) =>{
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        addClass:(data) => {
            dispatch({type:"ADD-CLASS",data:data});
        },
        resetSort:(data) => {
            dispatch({type:"RESET-SORT",data:data});
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(AddSort);