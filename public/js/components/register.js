import React, {Component} from "react";
import {Link, browserHistory} from 'react-router';

class Register extends Component {
    verifyUsername(){
        let username = this.refs.userName.value;
        let regexp = /^\w{4,6}$/;
        if (!regexp.test(username)) {
            $("#usernameTip").text("请将用户名设置为4-6位字母数字");
        }
        // else{
        //     this.props.isExit({username});
        // }
    }
    focusName(){
        $("#usernameTip").text("");

    }
    verifyPassword(){
        let password = this.refs.password.value;
        let regexp = /^\w{6,16}$/;
        if (!regexp.test(password)) {
            $("#passwordTip").text("请将密码设置为6-16位字母数字");
        }
    }
    focusPassword(){
        $("#passwordTip").text("");
        $("#repeatTip").text("");
    }
    repeatPassword() {
        let password = this.refs.password.value;
        let confirmPassword = this.refs.confirmPassword.value;
        if (password !== confirmPassword) {
            $("#repeatTip").text("与初始密码不一致");
        }
    }
    focusConfirm(){
        $("#repeatTip").text("");
    }
    register(){
        let psTip = $("#passwordTip").text();
        let rpTip = $("#repeatTip").text();
        // if(this.props.register.isExit != "false"){
        //     $("#usernameTip").text("用户名已被注册，请重新输入");
        // }
        if(psTip != ""){
            $("#password").focus();
        }
        else if(rpTip != ""){
            $("#confirmPassword").focus();
        }else{
            let username = this.refs.userName.value;
            let password = this.refs.password.value;
            console.log(username,password);
            this.props.onRegister({username,password})
        }
    }
    componentWillUpdate(nextProps){
        if(nextProps.register.isRegister){
            browserHistory.push('/login');
            this.props.resetRegister({isRegister:false})
        }
    }

    render() {
        return <div>
            <div className="backgroundImg"></div>
            <section className="content-box">
                <div className="left-area f1">
                    <h3 className="headline">注册</h3>
                    <div className="input-item clearfix">
                        <input type="text" className="inputStyle" ref="userName" placeholder="请输入用户名" id="userName" autoFocus="autoFocus"
                        onBlur={this.verifyUsername.bind(this)} onFocus={this.focusName.bind(this)}/>
                        <span className="input-tips" id="usernameTip"></span>
                    </div>
                    <div className="input-item clearfix">
                        <input type="password" className="inputStyle" ref="password" placeholder="请输入密码" id="password"
                        onBlur={this.verifyPassword.bind(this)}onFocus={this.focusPassword.bind(this)} />
                        <span className="input-tips" id="passwordTip"></span>
                    </div>
                    <div className="input-item clearfix">
                        <input type="password" className="inputStyle" ref="confirmPassword" placeholder="请再次输入密码" id="confirmPassword"
                        onBlur={this.repeatPassword.bind(this)} onFocus={this.focusConfirm.bind(this)}/>
                        <span className="input-tips" id="repeatTip"></span>
                    </div>
                    <div>
                        <button type="submit" className="buttonType" onClick={this.register.bind(this)} >注册</button>
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