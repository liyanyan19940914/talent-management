import React,{Component} from 'react';
import Nav from '../containers/nav';
import Footer from '../containers/footer';
import FileUpload from '../containers/fileUpload';

class PostCoverMessage extends Component{
    changeColor(e){
        if(e.target.className != "post-navList"){
            var child =e.target.parentNode.parentNode.parentNode.children;
            console.log(child);
            for(var i=0;i<child.length;i++){
                child[i].child.style.backgroundColor="tranparent";
            }
            e.target.style.backgroundColor=e.target.style.backgroundColor ==="transparent"?"#e4b9c0":"transparent";
        }
    }
    verifyTel(){
        let tel = this.refs.tel.value;
        let regexp = /^1[0-9]{10}$/;
        console.log(regexp.test(tel));
        if(!regexp.test(tel)){
            $('#telTip').text('请输入正确的电话号码！');
        }
    }

    initTel(){
        $('#telTip').text("");
    }

    verifyEmail(){
        let email = this.refs.email.value;
        let regexp = /^\w+@\w+(\.\w+){0,3}/;
        if(!regexp.test(email)){
            $('#emailTip').text('请输入正确的邮箱！');
        }
    }

    initEmail(){
        $('#emailTip').text("");
    }

    information(){
        let name = this.refs.name.value;
        let sex = this.refs.sex.value;
        let tel = this.refs.tel.value;
        let email = this.refs.email.value;
        let job = this.refs.jobIntension.value;
        let telTip = $('#telTip').text();
        let emailTip = $('#emailTip').text();
        if(telTip != ""){
            $('#tel').focus();
        }else if(emailTip != ""){
            $('#email').focus();
        }
        else if(name === "" || sex === "" || tel === "" || email === "" || job === ""){
            alert("请补全信息");
        }else{
            this.refs.name.setAttribute('readOnly',true);
            this.refs.sex.setAttribute('readOnly',true);
            this.refs.tel.setAttribute('readOnly',true);
            this.refs.email.setAttribute('readOnly',true);
            this.refs.jobIntension.setAttribute('readOnly',true);
            document.getElementById('information-submit').style.display = "none";
        }

    }
    clearInformation(){
        this.refs.name.value = "";
        this.refs.sex.value = "男";
        this.refs.tel.value = "";
        this.refs.email.value = "";
        this.refs.jobIntension.value = ""
    }
    educationExperience(){
        let schoolName = this.refs.schoolName.value;
        let date1 = this.refs.date1.value;
        let date2 = this.refs.date2.value;
        let major = this.refs.major.value;
        let academic = this.refs.academic.value;
        if(schoolName === "" || date1 === "" || date2 === "" || major === "" || academic === ""){
            alert("请补全信息");
        }else{
            this.refs.schoolName.setAttribute('readOnly',true);
            this.refs.date1.setAttribute('readOnly',true);
            this.refs.date2.setAttribute('readOnly',true);
            this.refs.major.setAttribute('readOnly',true);
            this.refs.academic.setAttribute('readOnly',true);
            document.getElementById('education-submit').style.display = "none";
        }

    }
    clearEducationExperience(){
        this.refs.schoolName.value = "";
        this.refs.date1.value = "";
        this.refs.date2.value = "";
        this.refs.major.value = "";
        this.refs.academic.value = "博士研究生";
    }
    projectExperience(){
        let projectName = this.refs.projectName.value;
        let standard = this.refs.standard.value;
        let rol = this.refs.rol.value;
        let describe = this.refs.describe.value;
        let summary = this.refs.summary.value;
        let duty = this.refs.duty.value;
        if(projectName === "" || standard === "" || rol === "" || describe === "" || summary === "" || duty === ""){
            alert("请补全信息");
        }else{
            this.refs.projectName.setAttribute('readOnly',true);
            this.refs.standard.setAttribute('readOnly',true);
            this.refs.rol.setAttribute('readOnly',true);
            this.refs.describe.setAttribute('readOnly',true);
            this.refs.summary.setAttribute('readOnly',true);
            this.refs.duty.setAttribute('readOnly',true);
            document.getElementById('project-submit').style.display = "none";
        }
    }
    clearProjectExperience(){
        this.refs.projectName.value = "";
        this.refs.standard.value = "";
        this.refs.rol.value = "";
        this.refs.describe.value = "";
        this.refs.summary.value = "";
        this.refs.duty.value = "";
    }
    expectWork(){
        let jobType = this.refs.jobType.value;
        let city = this.refs.city.value;
        let pay = this.refs.pay.value;
        let industry = this.refs.industry.value;
        let occupation = this.refs.occupation.value;
        if(jobType === "" || city === "" || pay === "" || industry === "" || occupation === ""){
            alert("请补全信息");
        }else{
            this.refs.jobType.setAttribute('readOnly',true);
            this.refs.city.setAttribute('readOnly',true);
            this.refs.pay.setAttribute('readOnly',true);
            this.refs.industry.setAttribute('readOnly',true);
            this.refs.occupation.setAttribute('readOnly',true);
            document.getElementById('expectWork-submit').style.display = "none";
        }
    }
    clearExpectWork(){
        this.refs.jobType.value = "全职";
        this.refs.city.value = "";
        this.refs.pay.value = "2k以下";
        this.refs.industry.value = "";
        this.refs.occupation.value = "";
    }
    otherInformation(){
        let hobby = this.refs.hobby.value;
        let evaluate = this.refs.evaluate.value;
        if(hobby === "" || evaluate === ""  ){
            alert("请补全信息");
        }else{
            this.refs.hobby.setAttribute('readOnly',true);
            this.refs.evaluate.setAttribute('readOnly',true);
            document.getElementById('other-submit').style.display = "none";
        }
    }
    clearOtherInformation(){
        this.refs.hobby.value = "";
        this.refs.evaluate.value = "";
        this.refs.resume.value = "";
    }
    postResume(){
        let information = document.getElementById('information-submit').style.display;
        let education = document.getElementById('education-submit').style.display;
        let project = document.getElementById('project-submit').style.display;
        let expectWork = document.getElementById('expectWork-submit').style.display;
        let other = document.getElementById('other-submit').style.display;
        if(information === 'none' && education === 'none' && project === 'none' && expectWork === 'none' && other === 'none'){
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
            let fileUpload = this.props.fileUpload;
            let username = this.props.nav;
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth()+1;
            let day = date.getDate();
            let hours = date.getHours();
            let min = date.getMinutes();
            let second = date.getSeconds();
            let time = year+"-"+month+"-"+day+' '+hours+':'+min+':'+second;
            console.log(username,name,sex,tel,email,job,schoolName,date1,date2,major,academic,projectName,standard,
                rol,describe,summary,duty,jobType,city,pay,industry,occupation,hobby,evaluate,fileUpload);
            this.props.onPostCoverMessage({username,name,sex,tel,email,job,schoolName,date1,date2,major,academic,projectName,standard,
            rol,describe,summary,duty,jobType,city,pay,industry,occupation,hobby,evaluate,fileUpload,time});
        }else{
            alert('请补全信息');
        }
    }
    componentWillUpdate(nextProps){
        console.log('component',nextProps.postCoverMessage.isSave);
        if(nextProps.postCoverMessage.isSave === true){
            alert("发布成功");
            this.props.resetMessage({isSave:false});
        }else if(nextProps.postCoverMessage.isSave){
            alert("发布失败");
            this.props.resetMessage({isSave:false});
        }
    }
    render(){
        return <div>
            <Nav/>
            <div className="post-box">
                <div className="content">
                    <div className="post-right">
                        <div className="post-rightInner actionBarR">
                            <div className="content">
                                <div className="hd">学生档案</div>
                                <div className="actionBarList">
                                    <ul className="post-navList" onClick={this.changeColor.bind(this)}>
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
                                            <input type="text" className="form-control" id="name" ref="name" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">性别</label>
                                        <div className="col-sm-4">
                                            <select className="form-control" ref="sex" id="sex">
                                                <option>男</option>
                                                <option>女</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">联系方式</label>
                                        <div className="col-sm-8">
                                            <input type="tel" className="form-control" id="tel" ref="tel" placeholder=""
                                            onBlur={this.verifyTel.bind(this)} onFocus={this.initTel.bind(this)}/>
                                            <span className="input-tips" id="telTip"></span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">电子邮箱</label>
                                        <div className="col-sm-8">
                                            <input type="email" className="form-control" id="email" ref="email" placeholder=""
                                            onBlur={this.verifyEmail.bind(this)} onFocus={this.initEmail.bind(this)}/>
                                            <span className="input-tips" id="emailTip"></span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">求职意向</label>
                                        <div className="col-sm-8">
                                            <input type="" className="form-control" id="jobIntension" ref="jobIntension" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="form-group" id="information-submit">
                                        <button type="button" className="btn btn-info col-sm-offset-2 col-sm-1" onClick={this.information.bind(this)} id="if">保存</button>
                                        <button type="button" className="btn btn-default col-sm-offset-1 col-sm-1" onClick={this.clearInformation.bind(this)}>取消</button>
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
                                            <input type="text" className="form-control" id="schoolName" ref="schoolName" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">时间</label>
                                        <div className="col-sm-3">
                                            <input type="date" className="form-control" id="date1" ref="date1" placeholder=""/>
                                        </div>
                                        <div className="col-sm-1">
                                            <span className="place">至</span>
                                        </div>
                                        <div className="col-sm-3">
                                            <input type="date" className="form-control" id="date2" ref="date2" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">专业</label>
                                        <div className="col-sm-8">
                                            <input type="" className="form-control" id="major" ref="major" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">学历</label>
                                        <div className="col-sm-4">
                                            <select className="form-control" ref="academic">
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
                                    <div className="form-group" id="education-submit">
                                        <button type="button" className="btn btn-info col-sm-offset-2 col-sm-1" onClick={this.educationExperience.bind(this)}>保存</button>
                                        <button type="button" className="btn btn-default col-sm-offset-1 col-sm-1" onClick={this.clearEducationExperience.bind(this)}>取消</button>
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
                                            <input type="email" className="form-control" id="projectName" ref="projectName" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">项目规格</label>
                                        <div className="col-sm-8">
                                            <input type="email" className="form-control" id="standard" ref="standard" placeholder="人数"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">角色</label>
                                        <div className="col-sm-8">
                                            <input type="email" className="form-control" id="role" ref="rol" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">项目描述</label>
                                        <div className="col-sm-8">
                                            <textarea className="form-control" rows="3" ref="describe"></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">项目总结</label>
                                        <div className="col-sm-8">
                                            <textarea className="form-control" rows="3" ref="summary"></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">担任职责</label>
                                        <div className="col-sm-8">
                                            <textarea className="form-control" rows="3" ref="duty"></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group" id="project-submit">
                                        <button type="button" className="btn btn-info col-sm-offset-2 col-sm-1" onClick={this.projectExperience.bind(this)}>保存</button>
                                        <button type="button" className="btn btn-default col-sm-offset-1 col-sm-1" onClick={this.clearProjectExperience.bind(this)}>取消</button>
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
                                            <select className="form-control" ref="jobType">
                                                <option>全职</option>
                                                <option>兼职</option>
                                                <option>实习</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">工作城市</label>
                                        <div className="col-sm-8">
                                            <input type="email" className="form-control" id="city" ref="city" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">薪资范围</label>
                                        <div className="col-sm-4">
                                            <select className="form-control" ref="pay">
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
                                            <input type="email" className="form-control" id="industry" ref="industry" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">职业类别</label>
                                        <div className="col-sm-8">
                                            <input type="" className="form-control" id="occupation" ref="occupation" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="form-group" id="expectWork-submit">
                                        <button type="button" className="btn btn-info col-sm-offset-2 col-sm-1" onClick={this.expectWork.bind(this)}>保存</button>
                                        <button type="button" className="btn btn-default col-sm-offset-1 col-sm-1" onClick={this.clearExpectWork.bind(this)}>取消</button>
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
                                            <textarea className="form-control" rows="3" ref="hobby"></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="inputEmail3" className="col-sm-2 control-label">自我评价</label>
                                        <div className="col-sm-8">
                                            <textarea className="form-control" rows="3" ref="evaluate"></textarea>
                                        </div>
                                    </div>
                                    <FileUpload/>
                                    <div className="form-group" id="other-submit">
                                        <button type="button" className="btn btn-info col-sm-offset-2 col-sm-1" onClick={this.otherInformation.bind(this)}>保存</button>
                                        <button type="button" className="btn btn-default col-sm-offset-1 col-sm-1" onClick={this.clearOtherInformation.bind(this)}>取消</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2">
                                <button type="button" className="btn btn-primary col-sm-3" onClick={this.postResume.bind(this)}>确认</button>
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

export default PostCoverMessage;
