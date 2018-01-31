import {connect} from 'react-redux';
import Home from '../components/home';

const mapDispatchToProps = (dispatch) => {
    return {
        getAllCoverMessage:()=>{
            dispatch({type:'GET-ALL-COVER-MESSAGE'})
        }
    }
}

export default connect(()=>{return {}},mapDispatchToProps)(Home);