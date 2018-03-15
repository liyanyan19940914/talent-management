import {combineReducers} from 'redux';
import register from './register';
import login from './login';
import fileUpload from './fileUpload';
import postCoverMessage from './postCoverMessage';
import home from './home';
import personalCenter from './personalCenter';
import editCoverMessage from './editCoverMessage';
import nav from './nav';

export default combineReducers({
    register,
    login,
    nav,
    fileUpload,
    postCoverMessage,
    home,
    personalCenter,
    editCoverMessage
});