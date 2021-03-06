import {combineReducers} from 'redux';
import register from './register';
import login from './login';
import fileUpload from './fileUpload';
import postCoverMessage from './postCoverMessage';
import home from './home';
import personalCenter from './personalCenter';
import editCoverMessage from './editCoverMessage';
import nav from './nav';
import readCoverMessage from './readCoverMessage';
import forgetPassword from './forgetPsw';
import moreMessage from './moreMessage';
import practiceMessage from './practiceMessage';
import adminNav from './adminNav';
import addSort from './addSort';
import adminHome from './adminHome';
import editSortName from './editSort';

export default combineReducers({
    register,
    login,
    nav,
    fileUpload,
    postCoverMessage,
    home,
    personalCenter,
    editCoverMessage,
    readCoverMessage,
    forgetPassword,
    moreMessage,
    practiceMessage,
    adminNav,
    addSort,
    adminHome,
    editSortName
});