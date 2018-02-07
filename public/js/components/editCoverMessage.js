import React,{Component} from 'react';
import Nav from '../containers/nav';
import Footer from '../containers/footer';

class EditCoverMessage extends Component{
    modifyMessage(){
        let id = this.props.location.query.id;
        let name = this.refs.name.value;
        let sex = this.refs.sex.value;
        let tel = this.refs.tel.value;
        let email = this.refs.email.value;
        let job = this.refs.jobIntension.value;
        let schoolName = this.refs.schoolName.value;
        let date1 = this.refs.date1.value;
        let date2 = this.refs.date2.value;
        let major = this.refs.major.value;
        let academic = this.refs.academic.value;
        let projectName = this.refs.projectName.value;
        let standard = this.refs.standard.value;
        let rol = this.refs.rol.value;
        let describe = this.refs.describe.value;
        let summary = this.refs.summary.value;
        let duty = this.refs.duty.value;
        let jobType = this.refs.jobType.value;
        let city = this.refs.city.value;
        let pay = this.refs.pay.value;
        let industry = this.refs.industry.value;
        let occupation = this.refs.occupation.value;
        let hobby = this.refs.hobby.value;
        let evaluate = this.refs.evaluate.value;
        let username = this.props.location.query.username;
        this.props.updateMessage({id,username,name,sex,tel,email,job,schoolName,date1,date2,major,academic,projectName,standard,
            rol,describe,summary,duty,jobType,city,pay,industry,occupation,hobby,evaluate})
    }
    render(){
        const message = this.props.location.query;
        console.log(message);
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
                                            <input type="text" className="form-control" id="name" ref="name" value={message.name} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">性别</label>
                                        <div className="col-sm-4">
                                            <select className="form-control" ref="sex" id="sex" value={message.sex}>
                                                <option>男</option>
                                                <option>女</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">联系方式</label>
                                        <div className="col-sm-8">
                                            <input type="tel" className="form-control" id="tel" ref="tel" value={message.tel} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">电子邮箱</label>
                                        <div className="col-sm-8">
                                            <input type="email" className="form-control" id="email" ref="email" value={message.email} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">求职意向</label>
                                        <div className="col-sm-8">
                                            <input type="" className="form-control" id="jobIntension" ref="jobIntension" value={message.job} />
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
                                            <input type="text" className="form-control" id="schoolName" ref="schoolName" value={message.schoolName} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">时间</label>
                                        <div className="col-sm-3">
                                            <input type="date" className="form-control" id="date1" ref="date1" value={message.date1} />
                                        </div>
                                        <div className="col-sm-1">
                                            <span className="place">至</span>
                                        </div>
                                        <div className="col-sm-3">
                                            <input type="date" className="form-control" id="date2" ref="date2" value={message.date2} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">专业</label>
                                        <div className="col-sm-8">
                                            <input type="" className="form-control" id="major" ref="major" value={message.major} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">学历</label>
                                            <div className="col-sm-4">
                                                <select className="form-control" ref="academic" value={message.academic}>
                                                    <option>博士研究生</option>
                                                    <option>硕士研究生</option>
                                                    <option>本科</option>
                                                    <option>大专</option>
                                                    <option>中专</option>
                                                    <option>高中及以下</option>
                                                    <option>其它</option>
                                                </select>
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
                                            <input type="email" className="form-control" id="projectName" ref="projectName"  value={message.projectName} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">项目规格</label>
                                        <div className="col-sm-8">
                                            <input type="email" className="form-control" id="standard" ref="standard" value={message.standard} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">角色</label>
                                        <div className="col-sm-8">
                                            <input type="email" className="form-control" id="role" ref="rol" value={message.rol} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">项目描述</label>
                                        <div className="col-sm-8">
                                            <textarea className="form-control" rows="3" ref="describe" value={message.describes} ></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">项目总结</label>
                                        <div className="col-sm-8">
                                            <textarea className="form-control" rows="3" ref="summary" value={message.summary} ></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">担任职责</label>
                                        <div className="col-sm-8">
                                            <textarea className="form-control" rows="3" ref="duty" value={message.duty} ></textarea>
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
                                            <div className="col-sm-4">
                                                <select className="form-control" ref="jobType" value={message.jobType}>
                                                    <option>全职</option>
                                                    <option>兼职</option>
                                                    <option>实习</option>
                                                </select>
                                            </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">工作城市</label>
                                        <div className="col-sm-8">
                                            <input type="email" className="form-control" id="city" ref="city" value={message.city} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">薪资范围</label>
                                        <div className="col-sm-4">
                                                <select className="form-control" ref="pay" value={message.pay}>
                                                    <option>2k以下</option>
                                                    <option>2k-5k</option>
                                                    <option>5k-10k</option>
                                                    <option>10k-15k</option>
                                                    <option>15k-20k</option>
                                                    <option>20k-25k</option>
                                                    <option>25k-50k</option>
                                                    <option>50k以上</option>
                                                </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">所属行业</label>
                                        <div className="col-sm-8">
                                            <input type="email" className="form-control" id="industry" ref="industry" value={message.industry} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">职业类别</label>
                                        <div className="col-sm-8">
                                            <input type="" className="form-control" id="occupation" ref="occupation" value={message.occupation} />
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
                                            <textarea className="form-control" rows="3" ref="hobby" value={message.hobby} ></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">自我评价</label>
                                        <div className="col-sm-8">
                                            <textarea className="form-control" rows="3" ref="evaluate" value={message.evaluate} ></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2">
                                <button type="button" className="btn btn-primary col-sm-3" onClick={this.modifyMessage.bind(this)}>确认</button>
                            </div>
                            <div>
                                <button type="button" className="btn btn-default col-sm-offset-2 col-sm-3">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    }
}

export default EditCoverMessage;