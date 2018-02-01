import {connect} from 'react-redux';
import Home from '../components/home';

const mapStateToProps = (state) => {
    console.log('state',state.home);
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllCoverMessage:()=>{
            dispatch({type:'GET-ALL-COVER-MESSAGE'})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);