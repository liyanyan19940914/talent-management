import React,{Component} from 'react';
import Nav from '../containers/nav';
import Footer from '../containers/footer';

class ReadCoverMessage extends Component{
    download(file){
        //const fileArray = file.split('/');
        // const dir = fileArray[0];
        //const fileName = fileArray[1];
        // console.log(dir,fileName);
        // this.props.downloadFile({dir,fileName});
        window.open('public/'+file, 'newwindow', 'height=100, width=400, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no');////该代码要在一行展现
    }

    componentWillMount(){
        let message_id = this.props.location.query.message_id;
        this.props.getDiscuss({message_id});
    }

    focusDiscuss(){
        let buttons = this.refs.buttonGroup;
        buttons.style.display = 'inline';
    }

    discuss(){
        let message_id = this.props.location.query.message_id;
        let username = this.props.nav;
        let talk = this.refs.talk.value;
        if(talk === ""){
            alert('回复内容不能为空！')
        }else{
            let buttons = this.refs.buttonGroup;
            buttons.style.display = 'none';
            let discuss = this.refs.talk;
            discuss.value = "";
            discuss.style.placeholder = "写下你的评论...";
            this.props.sendDiscuess({message_id,username,talk});
        }
    }

    componentWillUpdate(nextProps){
        if(nextProps.readCoverMessage.isSend === true){
            alert('发布成功！');
            this.props.resetDiscuss({isSend:false});
        }else if(nextProps.readCoverMessage.isSend){
            alert('发布失败！');
            this.props.resetDiscuss({isSend:false});
        }
    }

    render(){
        const message = this.props.location.query;
        return <div>
            <Nav/>
            <div className="post-box">
                <div className="content">
                    <div className="post-right">
                        <div className="post-rightInner actionBarR">
                            <div className="content">
                                <div className="hd">学生档案</div>
                                <div className="actionBarList">
                                    <ul className="post-navList">
                                        <li>
                                            <a href="#information">
                                                <i className="glyphicon glyphicon-triangle-right"></i>
                                                <span>基本信息</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#educationExperience">
                                                <i className="glyphicon glyphicon-triangle-right"></i>
                                                <span>教育经历</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#projectExperience">
                                                <i className="glyphicon glyphicon-triangle-right"></i>
                                                <span>项目经验</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#expectWork">
                                                <i className="glyphicon glyphicon-triangle-right"></i>
                                                <span>期望工作</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#otherInformation">
                                                <i className="glyphicon glyphicon-triangle-right"></i>
                                                <span>其他信息</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="post-left">
                        <div className="panel panel-info post-location" id="information">
                            <div className="panel-heading">基本信息</div>
                            <div className="panel-body">
                                <form className="form-horizontal">
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">姓名</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" id="name" ref="name" placeholder={message.name} readOnly="readOnly"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">性别</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" id="sex" ref="sex" placeholder={message.sex} readOnly="readOnly"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">联系方式</label>
                                        <div className="col-sm-8">
                                            <input type="tel" className="form-control" id="tel" ref="tel" placeholder={message.tel} readOnly="readOnly"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">电子邮箱</label>
                                        <div className="col-sm-8">
                                            <input type="email" className="form-control" id="email" ref="email" placeholder={message.email} readOnly="readOnly"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">求职意向</label>
                                        <div className="col-sm-8">
                                            <input type="" className="form-control" id="jobIntension" ref="jobIntension" placeholder={message.job} readOnly="readOnly"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="panel panel-info" id="educationExperience">
                            <div className="panel-heading">教育经历</div>
                            <div className="panel-body">
                                <form className="form-horizontal">
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">学校名称</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" id="schoolName" ref="schoolName" placeholder={message.schoolName} readOnly="readOnly"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">时间</label>
                                        <div className="col-sm-3">
                                            <input type="text" className="form-control" id="date1" ref="date1" placeholder={message.date1} readOnly="readOnly"/>
                                        </div>
                                        <div className="col-sm-1">
                                            <span className="place">至</span>
                                        </div>
                                        <div className="col-sm-3">
                                            <input type="text" className="form-control" id="date2" ref="date2" placeholder={message.date2} readOnly="readOnly"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">专业</label>
                                        <div className="col-sm-8">
                                            <input type="" className="form-control" id="major" ref="major" placeholder={message.major} readOnly="readOnly"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">学历</label>
                                        <div className="col-sm-8">
                                            <input type="text" className="form-control" id="name" ref="name" placeholder={message.academic} readOnly="readOnly"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="panel panel-info" id="projectExperience">
                            <div className="panel-heading">项目经验</div>
                            <div className="panel-body">
                                <form className="form-horizontal">
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">项目名称</label>
                                        <div className="col-sm-8">
                                            <input type="email" className="form-control" id="projectName" ref="projectName" placeholder={message.projectName} readOnly="readOnly"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">项目规格</label>
                                        <div className="col-sm-8">
                                            <input type="email" className="form-control" id="standard" ref="standard" placeholder={message.standard} readOnly="readOnly"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">角色</label>
                                        <div className="col-sm-8">
                                            <input type="email" className="form-control" id="role" ref="rol" placeholder={message.rol} readOnly="readOnly"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">项目描述</label>
                                        <div className="col-sm-8">
                                            <textarea className="form-control" rows="3" ref="describe" placeholder={message.describes} readOnly="readOnly"></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">项目总结</label>
                                        <div className="col-sm-8">
                                            <textarea className="form-control" rows="3" ref="summary" placeholder={message.summary} readOnly="readOnly"></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">担任职责</label>
                                        <div className="col-sm-8">
                                            <textarea className="form-control" rows="3" ref="duty" placeholder={message.duty} readOnly="readOnly"></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="panel panel-info" id="expectWork">
                            <div className="panel-heading">期望工作</div>
                            <div className="panel-body">
                                <form className="form-horizontal">
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">工作类型</label>
                                        <div className="col-sm-8">
                                            <input type="email" className="form-control" id="city" ref="city" placeholder={message.jobType} readOnly="readOnly"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">工作城市</label>
                                        <div className="col-sm-8">
                                            <input type="email" className="form-control" id="city" ref="city" placeholder={message.city} readOnly="readOnly"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">薪资范围</label>
                                        <div className="col-sm-8">
                                            <input type="email" className="form-control" id="city" ref="city" placeholder={message.pay} readOnly="readOnly"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">所属行业</label>
                                        <div className="col-sm-8">
                                            <input type="email" className="form-control" id="industry" ref="industry" placeholder={message.industry} readOnly="readOnly"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">职业类别</label>
                                        <div className="col-sm-8">
                                            <input type="" className="form-control" id="occupation" ref="occupation" placeholder={message.occupation} readOnly="readOnly"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="panel panel-info" id="otherInformation">
                            <div className="panel-heading">其它信息</div>
                            <div className="panel-body">
                                <form className="form-horizontal">
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">兴趣爱好 </label>
                                        <div className="col-sm-8">
                                            <textarea className="form-control" rows="3" ref="hobby" placeholder={message.hobby} readOnly="readOnly"></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">自我评价</label>
                                        <div className="col-sm-8">
                                            <textarea className="form-control" rows="3" ref="evaluate" placeholder={message.evaluate} readOnly="readOnly"></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">简历</label>
                                        <div className="col-sm-8">
                                            <a className="fileUpload" name="fileUpload" onClick={this.download.bind(this,message.fileUpload)}>{message.fileUpload}</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <h2 className="talking">发表评论</h2>
                        <form className="form-horizontal">
                            <div className="form-group">
                                <div className="col-sm-12">
                                    <textarea className="form-control" rows="3" ref="talk" placeholder="写下你的评论..."
                                    onFocus={this.focusDiscuss.bind(this)}></textarea>
                                </div>
                            </div>
                            <div className="form-group button-group" ref="buttonGroup">
                                <button type="button" className="btn btn-default col-sm-offset-8 col-sm-1">取消</button>
                                <button type="button" className="btn btn-info col-sm-offset-1 col-sm-1" onClick={this.discuss.bind(this)}>发布</button>
                            </div>
                        </form>
                        <h2 className="talking">评论</h2>
                        <div className="list-empty">
                            <span>该信息尚未收到邀约评论</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    }
}

export default ReadCoverMessage;