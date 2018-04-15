import {connect} from 'react-redux';
import ForgetPsw from '../components/forgetPsw';

const mapStateToProps = (state) => {
    console.log('state',state.forgetPassword);
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        forgetPsw:(data) => {
            dispatch({type:'FORGET-PSW',data})
        },
        resetForgetPsw:(data) => {
            dispatch({type:'RESET-FORGET-PSW',data})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ForgetPsw);