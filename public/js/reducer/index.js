import {combineReducers} from 'redux';
import register from './register';
import login from './login';
import fileUpload from './fileUpload';
import postCoverMessage from './postCoverMessage';
import home from './home';
import personalCenter from './personalCenter';
import editCoverMessage from './editCoverMessage';

export default combineReducers({
    register,
    login,
    fileUpload,
    postCoverMessage,
    home,
    personalCenter,
    editCoverMessage
});