import {connect} from 'react-redux';
import ReadCoverMessage from '../components/readCoverMessage';

const mapDispatchToProps = (dispatch) => {
    return {
        downloadFile:(data) => {
            dispatch({type:'DOWNLOAD',data})
        }
    }
}

export default connect(()=>{return {}},mapDispatchToProps)(ReadCoverMessage);