import {connect} from 'react-redux';
import EditCoverMessage from '../components/editCoverMessage';

const mapDispatchToProps = (dispatch) => {
    return {
        updateMessage:(date) => {
            dispatch({type:'UPDATE-COVER-MESSAGE',date});
        }
    }
}

export default connect(()=>{return {}},mapDispatchToProps)(EditCoverMessage);