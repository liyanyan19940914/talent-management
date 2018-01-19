import React, {Component} from "react";
import {Link, browserHistory} from 'react-router';

class Login extends Component {
    confirmUsername(){
        let username = this.refs.userName.value;
        if(username === ""){
            $("#usernameTip").text("用户名不能为空")
        }
    }
    focusUsername(){
        $("#usernameTip").text("");
    }
    confirmPassword(){
        let password = this.refs.password.value;
        if(password === ""){
            $("#passwordTip").text("密码不能为空");
        }
    }
    focusPassword(){
        $("#passwordTip").text("");
    }
    login(){
        let username = this.refs.userName.value;
        let password = this.refs.password.value;
        this.props.onLogin({username,password});
    }
    render() {
        return <div>
            <div className="backgroundImg"></div>
            <section className="content-box">
                <div className="left-area f1">
                    <h3 className="headline">登录</h3>
                    <div>
                        <input type="text" className="inputStyle" ref="userName" placeholder="请输入用户名" name="userName" autoFocus="autoFocus"
                        onBlur={this.confirmUsername.bind(this)} onFocus={this.focusUsername.bind(this)}/>
                        <span className="input-tips" id="usernameTip"></span>
                    </div>
                    <div>
                        <input type="password" className="inputStyle" ref="password" placeholder="请输入密码" name="password"
                        onBlur={this.confirmPassword.bind(this)} onFocus={this.focusPassword.bind(this)}/>
                        <span className="input-tips" id="passwordTip"></span>
                    </div>
                    <span className="forgot-pwd">忘记密码？</span>
                    <div>
                        <button type="submit" className="buttonType" onClick={this.login.bind(this)}>登录</button>
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