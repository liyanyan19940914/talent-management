import {connect} from 'react-redux';
import ForgetPsw from '../components/forgetPsw';

const mapDispatchToProps = (dispatch) => {
    return {
        forgetPsw:(data) => {
            dispatch({type:'FORGET-PSW',data})
        }
    }
}

export default connect(() => {return {}},mapDispatchToProps)(ForgetPsw);