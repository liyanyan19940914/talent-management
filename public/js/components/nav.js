import React,{Component} from "react";
import {Link, browserHistory} from 'react-router';

class Nav extends Component{
    componentWillMount(){
        this.props.loadUsername();
    }
    render(){
        return <div>
            <div className="lg-tbar">
                <div className="inner">
                    <div className="lg-tbar-l">
                        <span className="topic">人才信息管理</span>
                    </div>
                    <div className="lg-tbar-r">
                        <div>
                            <span className="login">登录</span>
                            <span className="login">注册</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg-tnav">
                <div className="inner">
                    <ul className="nav">
                        <li><span className="colorA" >首页</span></li>
                        <li><span className="colorA" >发布信息</span></li>
                        <li>个人中心</li>
                    </ul>
                </div>
            </div>
        </div>
    }
}

export default Nav;