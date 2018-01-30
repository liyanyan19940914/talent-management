import {connect} from "react-redux";
import PostCoverMessage from "../components/postCoverMessage";

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        postCoverMessage:(data)=>{
            dispatch({type:'POST-COVER-MESSAGE',data})
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(PostCoverMessage);