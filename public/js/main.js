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

import registerMiddleware from './middleware/register';
import loginMiddleware from './middleware/login';
import postCoverMessageMiddleware from './middleware/postCoverMessage';
import homeMiddleware from './middleware/home';

const createStoreWithMiddleware = applyMiddleware(registerMiddleware,loginMiddleware,postCoverMessageMiddleware,homeMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}/>
            <Route path='/register' component={Register}/>
            <Route path='/login' component={Login}/>
            <Route path='/home' component={Home}/>
            <Route path="/readCoverMessage" component={ReadCoverMessage}/>
            <Route path="/postCoverMessage" component={PostCoverMessage}/>
        </Router>
    </Provider>, document.getElementById('app')
);
