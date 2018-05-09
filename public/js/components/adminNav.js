import React,{Component} from "react";
import {Link, browserHistory} from 'react-router';

class AdminNav extends Component{

    componentWillMount(){
        this.props.loadUsername();
    }

    login(){
        browserHistory.push('/adminLogin');
    }

    logout(){
        this.props.logoutUser();
        browserHistory.push('/adminLogin');
    }
    render(){
        console.log(this.props.adminNav);
        return <div className="navBox">
            <div className="ltbar">
                <div className="inner">
                    <div className="lg-tbar-l">
                        <span className="topic">人才信息管理</span>
                    </div>
                    <div id="lg-tbar-r">
                        <span className="login">{this.props.adminNav+', 你好！'}</span>
                        <span className="login" onClick={this.logout.bind(this)}>注销</span>
                    </div>
                </div>
            </div>
            <div>
                <nav className="navbar-inverse lbar">
                    <ul className="lbar-list">
                        <li><span className="colorA">添加分类</span></li>
                        <li><span className="colorA">首页</span></li>
                    </ul>
                </nav>
            </div>
        </div>
    }
}

export default AdminNav;