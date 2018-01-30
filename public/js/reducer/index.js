import {combineReducers} from 'redux';
import register from './register';
import login from './login';
import fileUpload from './fileUpload';
import postCoverMessage from './postCoverMessage';

export default combineReducers({
    register,
    login,
    fileUpload,
    postCoverMessage
});