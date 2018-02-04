import {connect} from 'react-redux';
import PersonalCenter from '../components/personalCenter';

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatePsw:(date)=>{
            dispatch({type:'UPDATE-PASSWORD',date})
        },
        updateUsername:(date)=>{
          dispatch({type:"UPDATE-USERNAME",date})
        },
        resetUpdate:(date)=>{
            dispatch({type:'RESET-UPDATE',date})
        },
        resetUpdateUsername:(date)=>{
            dispatch({type:'RESET-USERNAME',date})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PersonalCenter);