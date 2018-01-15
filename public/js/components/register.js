import React, {Component} from "react";
import {Link, browserHistory} from 'react-router';

class Register extends Component {

    render() {
        return <div>
            <div className="backgroundImg"></div>
            <section className="content-box">
                <div className="left-area f1">
                    <h3 className="headline">注册</h3>
                    <div>
                        <input type="text" className="inputStyle" id="userName" placeholder="请输入用户名" name="userName" autoFocus="autoFocus"/>
                    </div>
                    <div>
                        <input type="password" className="inputStyle" id="password" placeholder="请输入密码" name="password"/>
                    </div>
                    <div>
                        <input type="password" className="inputStyle" id="confirm" placeholder="请再次输入密码" name="confirm"/>
                    </div>
                    <div>
                        <button type="submit" className="buttonType" >注册</button>
                    </div>
                </div>
                <div className="divider f1"></div>
                <div className="right-area f1">
                    <h5>已有账号：</h5>
                    <Link to="/login" className="login-now">立即登录</Link>
                </div>
            </section>

        </div>
    }

}

export default Register;