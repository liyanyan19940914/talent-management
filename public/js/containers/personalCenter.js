import {connect} from 'react-redux';
import PersonalCenter from '../components/personalCenter';

const mapDispatchToProps = (dispatch) => {
    return {
        updatePsw:(date)=>{
            dispatch({type:'UPDATE-PASSWORD',date})
        }
    }
}

export default connect(()=>{return {}},mapDispatchToProps)(PersonalCenter);