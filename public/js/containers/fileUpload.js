import {connect} from 'react-redux';
import FileUpload from '../components/fileUpload';

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        fileUpload:(data) => {
            dispatch({type:'FILE-UPLOAD',data})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FileUpload);