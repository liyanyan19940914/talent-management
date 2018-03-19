import {connect} from 'react-redux';
import ReadCoverMessage from '../components/readCoverMessage';

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        downloadFile:(data) => {
            dispatch({type:'DOWNLOAD',data})
        },
        sendDiscuess:(data) => {
            dispatch({type:'SEND-DISCUESS',data})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReadCoverMessage);