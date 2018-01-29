import React,{Component} from "react";
import {Link, browserHistory} from 'react-router';

class Nav extends Component{

    login(){
        browserHistory.push('/login');
    }
    register(){
        browserHistory.push('/register');
    }
    postMessage(){
        let cookies = {};
        document.cookie.split(';').forEach((Cookie)=>{
            let parts = Cookie.split('=');
            cookies[parts[0].trim()] = (parts[1]).trim();
        })
        let isLogin = this.props.login.loginUser;
        let user = cookies.username;
        if(user === isLogin ){
            browserHistory.push('/postCoverMessage')
        }else{
            browserHistory.push('/login');
        }
    }
    render(){
        console.log(this.props.login.loginUser);
        return <div>
            <div className="lg-tbar">
                <div className="inner">
                    <div className="lg-tbar-l">
                        <span className="topic">人才信息管理</span>
                    </div>
                    <div id="lg-tbar-r" className={this.props.login.loginUser?'hidden':''}>
                        <span className="login" onClick={this.login.bind(this)}>登录</span>
                        <span className="login" onClick={this.register.bind(this)}>注册</span>
                    </div>
                    <div id="lg-tbar-r" className = {this.props.login.loginUser?'':'hidden'}>
                        <span className="login">{this.props.login.loginUser+', 你好！'}</span>
                    </div>
                </div>
            </div>
            <div className="lg-tnav">
                <div className="inner">
                    <ul className="list">
                        <li><span className="colorA" >首页</span></li>
                        <li><span className="colorA" onClick={this.postMessage.bind(this)}>发布信息</span></li>
                        <li>个人中心</li>
                    </ul>
                </div>
            </div>
        </div>
    }
}

export default Nav;