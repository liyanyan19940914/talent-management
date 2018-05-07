import {connect} from "react-redux";
import PracticeMessage from '../components/practiceMessage';

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllMessage:()=>{
            dispatch({type:'GET-PRACTICE-MESSAGE'})
        },
        searchInfo:(data)=>{
            dispatch({type:'SEARCH-PRACTICE-INFO',data})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PracticeMessage);