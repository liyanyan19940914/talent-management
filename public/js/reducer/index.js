import {combineReducers} from 'redux';
import register from './register';
import login from './login';
import fileUpload from './fileUpload';

export default combineReducers({
    register,
    login,
    fileUpload
});