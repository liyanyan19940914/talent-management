import React, {Component} from "react";
import {Link, browserHistory} from 'react-router';

class Login extends Component {

    render() {
        return <div>
            <div className="backgroundImg"></div>
            <section className="content-box">
                <div className="left-area f1">
                    <h3 className="headline">登录</h3>
                    <div>
                        <input type="text" className="inputStyle" id="userName" placeholder="请输入用户名" name="userName" autoFocus="autoFocus"/>
                    </div>
                    <div>
                        <input type="password" className="inputStyle" id="password" placeholder="请输入密码" name="password"/>
                    </div>
                    <span className="forgot-pwd">忘记密码？</span>
                    <div>
                        <button type="submit" className="buttonType" >登录</button>
                    </div>
                </div>
                <div className="divider f1"></div>
                <div className="right-area f1">
                    <h5>没有账号：</h5>
                    <Link to="/register" className="login-now">立即注册</Link>
                </div>
            </section>

        </div>
    }

}

export default Login;