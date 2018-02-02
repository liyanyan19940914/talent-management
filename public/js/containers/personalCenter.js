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
        resetUpdate:(date)=>{
            dispatch({type:'RESET-UPDATE',date})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PersonalCenter);