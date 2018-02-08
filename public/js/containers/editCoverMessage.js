import {connect} from 'react-redux';
import EditCoverMessage from '../components/editCoverMessage';

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateMessage:(date) => {
            dispatch({type:'UPDATE-COVER-MESSAGE',date});
        },
        resetUpdate:(date) => {
            dispatch({type:'RESET-UPDATE',date})
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(EditCoverMessage);