import {connect} from 'react-redux';
import ReadCoverMessage from '../components/readCoverMessage';

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendDiscuess:(data) => {
            dispatch({type:'SEND-DISCUESS',data})
        },
        resetDiscuss:(data) => {
            dispatch({type:'RESET-DISCUSS',data})
        },
        getDiscuss:(data) => {
            dispatch({type:'GET-ALL-DISCUSS',data})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReadCoverMessage);