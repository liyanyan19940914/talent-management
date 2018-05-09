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

    addSort(){
        browserHistory.push('/addSort');
    }
    adminHome(){
        browserHistory.push('/adminHome');
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
            <div className="lgbar">
                <div className=" navbar-inverse lbar">
                    <ul className="lbar-list">
                        <li><span className="colorA" onClick={this.adminHome.bind(this)}>首页</span></li>
                        <li><span className="colorA" onClick={this.addSort.bind(this)}>添加分类</span></li>
                    </ul>
                </div>
            </div>
        </div>
    }
}

export default AdminNav;