import React, {Component} from "react";
import Nav from '../containers/nav';
import Footer from '../containers/footer';
import {Link, browserHistory} from 'react-router';

class MoreMessage extends Component{
    componentWillMount(){
        this.props.getAllMessage();
    }
    search(){
        let info = this.refs.info.value;
        if (info){
            this.props.searchInfo({info});
        }else{
            this.props.getAllMessage();
        }

    }
    render(){
        let coverMessages = this.props.moreMessage.message;
        let fullTime = Array.isArray(coverMessages)===false ? "" : coverMessages.filter((ele,index)=>{
            return ele.jobType === "全职";
        });
        console.log("more message",coverMessages);
        return <div>
            <Nav/>
            <div className="contain-header">
                <div className="search-wrapper">
                    <div className="search-box">
                        <form className="searchForm clearfix">
                            <input type="text" className="search-input" ref="info" placeholder="请根据职位，地点，学历搜索"/>
                            <button type="button" className="search-button" onClick={this.search.bind(this)}>查询</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="resultBox">
                <ul className="result-list">
                    {
                        Array.isArray(fullTime)===false ? "" : fullTime.map((ele,index)=>{
                            const path = "readCoverMessage?name="+ele.name+"&sex="+ele.sex+"&tel="+ele.tel+"&email="+ele.email+"&job="+ele.job
                                +"&schoolName="+ele.schoolName+"&date1="+ele.date1+"&date2="+ele.date2+"&major="+ele.major+"&academic="
                                +ele.academic+"&projectName="+ele.projectName+"&standard="+ele.standard+"&rol="+ele.rol+"&describes="+
                                ele.describes+"&summary="+ele.summary+"&duty="+ele.duty+"&jobType="+ele.jobType+"&city="+ele.city+
                                "&pay="+ele.pay+"&industry="+ele.industry+"&occupation="+ele.occupation+"&hobby="+ele.hobby+
                                "&evaluate="+ele.evaluate+"&fileUpload="+ele.fileUpload+"&message_id="+ele.message_id;

                            return <div key={index}>
                                <li>
                                    <div className="resultItem clearfix">
                                        <div className="resultInfo fr">
                                            <p className="resultSchool">
                                                <span>{ele.schoolName}</span>
                                            </p>
                                            <p className="resultMajor">{ele.major}</p>
                                        </div>
                                        <div className="resultJob fr">
                                            <p className="jobName">
                                                <Link to={path} className="wordCut">{ele.job}</Link>
                                            </p>
                                            <p className="jobCity">
                                                <span className="cityName">
                                                    城市：
                                                    <em className="cityVal">{ele.city}</em>
                                                </span>
                                            </p>
                                            <p className="jobCity">
                                                <span className="cityName">
                                                    发布时间：
                                                    <em className="cityVal">{ele.time}</em>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </div>

                        })
                    }
                </ul>
            </div>
            <Footer/>
        </div>
    }
}

export default MoreMessage;