import React, {Component} from 'react';

export default class Register extends Component {
    render() {
        return <div>
            <div className="row content">
                <div className="col-md-offset-6 col-md-6" id="inputGroup">
                    <center>
                        <h1 className="headline">注册</h1>
                    </center>
                    <input type="text" ref="username" className="form-control" id="img1" placeholder="用户名"/>
                    <span id="usernameTip"> </span><br/>
                    <input type="password" id="img2" placeholder="请将密码设置为6-16位字母数字" className="form-control"
                           ref="password" />
                    <span id="passwordTip"> </span><br/>
                    <input type="password" id="img3" placeholder="请重复输入密码" className="form-control"
                           ref="confirmPassword"/>
                    <span id="repeatTip"> </span><br/>
                    <button className="btn btn-default form-control">注册</button>
                </div>
            </div>
        </div>
    }
}