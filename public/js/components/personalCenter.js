import React,{Component} from 'react';
import Nav from '../containers/nav';
import Footer from '../containers/footer';
import {Link, browserHistory} from 'react-router';

class PersonalCenter extends Component{
    componentWillMount(){
        this.props.personalSend({username:this.props.nav})
    }
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

    verifyUsername(){
        let username = this.refs.newUsername.value;
        let regexp = /^\w{4,6}$/;
        if (!regexp.test(username)) {
            $("#usernameTip").text("请将用户名设置为4-6位字母数字");
        }
    }
    focusName(){
        $("#usernameTip").text("");

    }
    modifyUsername(){
        let unTip = $("#usernameTip").text();
        if(unTip != ""){
            $("#usernameTip").focus();
        }else{
            let oldUsername = this.refs.oldUsername.value;
            let newUsername = this.refs.newUsername.value;
            this.props.updateUsername({oldUsername,newUsername});
        }
    }
    deleteSend(id){
        let isdelete = confirm('是否删除？');
        if(isdelete) {
            this.props.deleteMessage({id});
        }
    }
    componentWillUpdate(nextProps){
        if(nextProps.personalCenter.update === 1){
            alert('修改成功！');
            this.props.resetUpdate({update:false});
        }else if(nextProps.personalCenter.update === 0){
            alert('当前密码错误！');
            this.props.resetUpdate({update:false});
        }else if(nextProps.personalCenter.updateUsername === 1){
            alert('修改成功！');
            this.props.resetUpdateUsername({updateUsername:false})
        }else if(nextProps.personalCenter.updateUsername === 0){
            alert('当前用户名错误！');
            this.props.resetUpdateUsername({updateUsername:false});
        }
        else if(nextProps.personalCenter.deleteMessage === 1){
            this.props.personalSend({username:this.props.login.loginUser});
        }else if(nextProps.personalCenter.deleteMessage === 0){
            alert('删除失败！');
        }

    }
    render(){
        let message = this.props.personalCenter.sendMessage;
        console.log('message',message);
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
                                                    <a href="#modify-username">修改用户名</a>
                                                </li>
                                                <li className="active">
                                                    <a href="#modify-psw">修改密码</a>
                                                </li>
                                                <li className="active">
                                                    <a href="#send">我的发布</a>
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
                                                <li className="active">
                                                    <a href=""></a>
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
                                        <div className="uploading" id="modify-username">
                                            <div className="clearfix">
                                                <div className="modify-box">
                                                    <h2 className="set-title">修改用户名</h2>
                                                    <div className="modify-psw-box">
                                                        <form className="form-horizontal">
                                                            <div className="form-group">
                                                                <label for="" className="col-sm-2 control-label">当前用户名</label>
                                                                <div className="col-sm-6">
                                                                    <input type="text" className="form-control" id="oldpsw" ref="oldUsername" placeholder=""/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label for="" className="col-sm-2 control-label">新用户名</label>
                                                                <div className="col-sm-6">
                                                                    <input type="text" className="form-control" id="newpsw" ref="newUsername" placeholder=""
                                                                           onBlur={this.verifyUsername.bind(this)} onFocus={this.focusName.bind(this)}/>
                                                                    <span className="input-tips" id="usernamedTip"></span>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <div className="col-sm-offset-2 col-sm-10">
                                                                    <button type="button" className="btn btn-success" onClick={this.modifyUsername.bind(this)}>保存</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
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
                                        <div className="uploading" id="send">
                                            <div className="clearfix">
                                                <div className="modify-box">
                                                    <h2 className="set-title">我的发布</h2>
                                                    <div className="modify-psw-box">
                                                        <ul className="list-ul">
                                                            {
                                                                this.props.personalCenter.sendMessage.length===0 ?'':this.props.personalCenter.sendMessage.map((ele,index)=>{
                                                                    const path = "editMessage?name="+ele.name+"&sex="+ele.sex+"&tel="+ele.tel+"&email="+ele.email+"&job="+ele.job
                                                                        +"&schoolName="+ele.schoolName+"&date1="+ele.date1+"&date2="+ele.date2+"&major="+ele.major+"&academic="
                                                                        +ele.academic+"&projectName="+ele.projectName+"&standard="+ele.standard+"&rol="+ele.rol+"&describes="+
                                                                        ele.describes+"&summary="+ele.summary+"&duty="+ele.duty+"&jobType="+ele.jobType+"&city="+ele.city+
                                                                        "&pay="+ele.pay+"&industry="+ele.industry+"&occupation="+ele.occupation+"&hobby="+ele.hobby+
                                                                        "&evaluate="+ele.evaluate+"&username="+ele.userName+"&id="+ele.message_id;
                                                                    return <div key={index}>
                                                                        <li className="personal-list-item">
                                                                            <div className="pli-top">
                                                                                <div className="clearfix">
                                                                                    <div className="position-name fl">
                                                                                        <h2 className="dib clearfix">
                                                                                            <Link to={path} className="wordCut fl">{ele.job}</Link>
                                                                                        </h2>
                                                                                    </div>
                                                                                    <span className="salary fr">{ele.pay}</span>
                                                                                </div>
                                                                                <div className="position-main-info wordCut">
                                                                                    <span>{ele.jobType}</span>
                                                                                    <span>{ele.academic}</span>
                                                                                </div>
                                                                                <div className="labels">
                                                                                    <div className="pli-btml-l">
                                                                                        <span className="wordCut">{ele.industry}</span>
                                                                                        <span className="wordCut pli-locattion">{ele.occupation}</span>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="labels">
                                                                                    <Link to={path} type="button" className="btn btn-success col-sm-3">编辑</Link>
                                                                                    <button type="button" className="btn btn-success col-sm-offset-2 col-sm-3" onClick={this.deleteSend.bind(this,ele.message_id)}>删除</button>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                    </div>
                                                                })
                                                            }
                                                        </ul>
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