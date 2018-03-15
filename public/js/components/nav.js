import React,{Component} from "react";
import {Link, browserHistory} from 'react-router';

class Nav extends Component{

    componentWillMount(){
        this.props.loadUsername();
    }

    login(){
        browserHistory.push('/login');
    }
    register(){
        browserHistory.push('/register');
    }
    postMessage() {
        let cookies = {};
        document.cookie.split(';').forEach((Cookie)=> {
            let parts = Cookie.split('=');
            cookies[parts[0].trim()] = (parts[1]).trim();
        });
        let isLogin = this.props.nav;
        let user = cookies.username;
        if (user === isLogin) {
            browserHistory.push('/postCoverMessage')
        } else {
            browserHistory.push('/login');
        }
    }
    home(){
        browserHistory.push('/home');
    }
    personalCenter(){
        let cookies = {};
        document.cookie.split(';').forEach((Cookie)=> {
            let parts = Cookie.split('=');
            cookies[parts[0].trim()] = (parts[1]).trim();
        });
        let isLogin = this.props.nav;
        let user = cookies.username;
        if (user === isLogin) {
            let path = "personalCenter?username="+user;
            browserHistory.push(path);
        } else {
            browserHistory.push('/login');
        }
    }
    render(){
        console.log(this.props.nav);
        return <div>
            <div className="lg-tbar">
                <div className="inner">
                    <div className="lg-tbar-l">
                        <span className="topic">人才信息管理</span>
                    </div>
                    <div id="lg-tbar-r" className={this.props.nav ? 'hidden':''}>
                        <span className="login" onClick={this.login.bind(this)}>登录</span>
                        <span className="login" onClick={this.register.bind(this)}>注册</span>
                    </div>
                    <div id="lg-tbar-r" className = {this.props.nav ? '':'hidden'}>
                        <span className="login">{this.props.nav+', 你好！'}</span>
                    </div>
                </div>
            </div>
            <div className="lg-tnav">
                <div className="inner">
                    <ul className="list">
                        <li><span className="colorA" onClick={this.home.bind(this)}>首页</span></li>
                        <li><span className="colorA" onClick={this.postMessage.bind(this)}>发布信息</span></li>
                        <li><span className="colorA" onClick={this.personalCenter.bind(this)}>个人中心</span></li>
                    </ul>
                </div>
            </div>
        </div>
    }
}

export default Nav;