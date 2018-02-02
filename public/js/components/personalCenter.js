import React,{Component} from 'react';
import Nav from '../containers/nav';
import Footer from '../containers/footer';

class PersonalCenter extends Component{
    verifyPassword(){
        let password = this.refs.newpsw.value;
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
        let password = this.refs.newpsw.value;
        let confirmPassword = this.refs.confirmpsw.value;
        if (password !== confirmPassword) {
            $("#repeatTip").text("与初始密码不一致");
        }
    }
    focusConfirm(){
        $("#repeatTip").text("");
    }
    modifyPsw(){
        let psTip = $("#passwordTip").text();
        let rpTip = $("#repeatTip").text();
        if(psTip != ""){
            $("#password").focus();
        }
        else if(rpTip != ""){
            $("#confirmPassword").focus();
        }else{
            let oldpsw = this.refs.oldpsw.value;
            let password = this.refs.newpsw.value;
            let confirmPassword = this.refs.confirmpsw.value;
            let username = this.props.location.query.username;
            console.log(username,oldpsw,password,confirmPassword);
            this.props.updatePsw({username,oldpsw,password});
        }
    }
    componentWillUpdate(nextProps){
        if(nextProps.personalCenter.update === 1){
            alert('修改成功！');
            this.props.resetUpdate({update:false});
        }else if(nextProps.personalCenter.update === 0){
            alert('当前密码错误！');
            this.props.resetUpdate({update:false});
        }
    }
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
                                                <li className="active">
                                                    <a href=""></a>
                                                </li>
                                                <li className="active">
                                                    <a href=""></a>
                                                </li>
                                                <li className="active">
                                                    <a href=""></a>
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
                                                    <div className="modify-psw-box">
                                                        <form className="form-horizontal">
                                                            <div className="form-group">
                                                                <label for="inputEmail3" className="col-sm-2 control-label">当前密码</label>
                                                                <div className="col-sm-6">
                                                                    <input type="password" className="form-control" id="oldpsw" ref="oldpsw" placeholder=""/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label for="inputPassword3" className="col-sm-2 control-label">新密码</label>
                                                                <div className="col-sm-6">
                                                                    <input type="password" className="form-control" id="newpsw" ref="newpsw" placeholder=""
                                                                    onBlur={this.verifyPassword.bind(this)} onFocus={this.focusPassword.bind(this)}/>
                                                                    <span className="input-tips" id="passwordTip"></span>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label for="inputPassword3" className="col-sm-2 control-label">再输入一次</label>
                                                                <div className="col-sm-6">
                                                                    <input type="password" className="form-control" id="confirmpsw" ref="confirmpsw" placeholder=""
                                                                    onBlur={this.repeatPassword.bind(this)} onFocus={this.focusConfirm.bind(this)}/>
                                                                    <span className="input-tips" id="repeatTip"></span>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <div className="col-sm-offset-2 col-sm-10">
                                                                    <button type="button" className="btn btn-success" onClick={this.modifyPsw.bind(this)}>保存</button>
                                                                </div>
                                                            </div>
                                                        </form>
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
            </div>
            <Footer/>
        </div>
    }
}

export default PersonalCenter;