import {connect} from 'react-redux';
import AddSort from '../components/addSort';

const mapDispatchToProps = (dispatch) => {
    return {
        addClass:(data) => {
            dispatch({type:"ADD-CLASS",data:data});
        }
    }
}

export default connect(()=>{return {}},mapDispatchToProps)(AddSort);