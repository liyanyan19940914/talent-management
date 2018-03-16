import {connect} from "react-redux";
import PostCoverMessage from "../components/postCoverMessage";

const mapStateToProps = (state) => {
    console.log(state);
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPostCoverMessage:(data)=>{
            dispatch({type:'POST-COVER-MESSAGE',data})
        },
        resetMessage:(data) => {
            dispatch({type:'RESET-MESSAGE',data})
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(PostCoverMessage);