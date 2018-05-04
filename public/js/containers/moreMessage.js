import {connect} from "react-redux";
import MoreMessage from '../components/moreMessage';

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllMessage:()=>{
            dispatch({type:'GET-ALL-MESSAGE'})
        },
        searchInfo:(data)=>{
            dispatch({type:'SEARCH-INFO',data})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MoreMessage);