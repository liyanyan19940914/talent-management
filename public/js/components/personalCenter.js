import React,{Component} from 'react';
import Nav from '../containers/nav';
import Footer from '../containers/footer';

class PersonalCenter extends Component{

    render(){
        return <div>
            <Nav/>
            <div className="pc-content-wrap">
                <div className="pc-content-inner">
                    <div className="pc-content-shadow">
                        <div className="clearfix" id="content">
                            <div className="maincolumn">
                                <div className="setting">
                                    <div className="navigation">
                                        <div className="tabs">
                                            <ul>
                                                <li className="active">
                                                    <a href="#send">我的发布</a>
                                                </li>
                                                <li className="active">
                                                    <a href="#modify-psw">修改密码</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="room">
                                        <div className="uploading" id="send">
                                            <div className="clearfix">
                                                <div className="modify-box">
                                                    <h2 className="set-title">我的发布</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="uploading" id="modify-psw">
                                            <div className="clearfix">
                                                <div className="modify-box">
                                                    <h2 className="set-title">修改密码</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    }
}

export default PersonalCenter;