import {combineReducers} from 'redux';
import register from './register';
import login from './login';
import fileUpload from './fileUpload';
import postCoverMessage from './postCoverMessage';
import home from './home';

export default combineReducers({
    register,
    login,
    fileUpload,
    postCoverMessage,
    home
});