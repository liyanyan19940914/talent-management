import React from 'react';
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from "react-redux";
import reducer from "./reducer/index";

import App from './containers/app';
import Register from './containers/register';
import Login from './containers/login';
import PostCoverMessage from './containers/postCoverMessage';
import Home from './containers/home';
import ReadCoverMessage from './containers/readCoverMessage';
import PersonalCenter from './containers/personalCenter';
import EditCoverMessage from './containers/editCoverMessage';
import Upload from './containers/fileUpload';
import ForgetPsw from './containers/forgetPsw';
import MoreMessage from './containers/moreMessage';
import PracticeMessage from './containers/practiceMessage';
import AddSort from './containers/addSort';

import registerMiddleware from './middleware/register';
import loginMiddleware from './middleware/login';
import postCoverMessageMiddleware from './middleware/postCoverMessage';
import homeMiddleware from './middleware/home';
import personalCenterMiddleware from './middleware/personalCenter';
import editCoverMessageMiddleware from './middleware/editCoverMessage';
import navMiddleware from './middleware/nav';
import readCoverMessageMiddleware from './middleware/readCoverMessage';
import forgetPswMiddleware from './middleware/forgetPsw';
import moreMessageMiddleware from './middleware/moreMessage';
import practiceMessageMiddleware from './middleware/practiceMessage';
import adminNavMiddleware from './middleware/adminNav';

const createStoreWithMiddleware = applyMiddleware(registerMiddleware,loginMiddleware,postCoverMessageMiddleware,
    homeMiddleware,personalCenterMiddleware,editCoverMessageMiddleware,navMiddleware,readCoverMessageMiddleware,
    forgetPswMiddleware,moreMessageMiddleware,practiceMessageMiddleware,adminNavMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}/>
            <Route path='/register' component={Register}/>
            <Route path='/login' component={Login}/>
            <Route path="/adminLogin" component={Login}/>
            <Route path='/home' component={Home}/>
            <Route path="/readCoverMessage" component={ReadCoverMessage}/>
            <Route path="/postCoverMessage" component={PostCoverMessage}/>
            <Route path="/personalCenter" component={PersonalCenter}/>
            <Route path="/editMessage" component={EditCoverMessage}/>
            <Route path="upload" component={Upload}/>
            <Route path="/forgetPsw" component={ForgetPsw}/>
            <Route path="/moreMessage" component={MoreMessage}/>
            <Route path="/practiceMessage" component={PracticeMessage}/>
            <Route path="/addSort" component={AddSort}/>
        </Router>
    </Provider>, document.getElementById('app')
);
