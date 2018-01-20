import React from 'react';
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from "react-redux";
import reducer from "./reducer/index";

import App from './containers/app';
import Register from './containers/register';
import Login from './containers/login';
import Nav from './containers/nav';

import registerMiddleware from './middleware/register';
import loginMiddleware from './middleware/login';
import navMiddleware from './middleware/nav';

const createStoreWithMiddleware = applyMiddleware(registerMiddleware,loginMiddleware,navMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}/>
            <Route path='/register' component={Register}/>
            <Route path='/login' component={Login}/>
            <Route path='/nav' component={Nav}/>
        </Router>
    </Provider>, document.getElementById('app')
);
