import React,{Component} from "react";
import {Link, browserHistory} from 'react-router';
import Nav from '../containers/nav';
import Footer from '../containers/footer';

class Home extends Component{
    componentWillMount(){
        this.props.getAllCoverMessage();
    }
    render(){
        let coverMessages = this.props.home;
        return <div>
            <Nav/>
                <div className="contain-header">
                    <div className="search-wrapper">
                        <div className="search-box">
                            <form className="searchForm clearfix">
                                <input type="text" className="search-input" placeholder="搜索职位，地点"/>
                                <input type="submit" className="search-button"/>
                            </form>
                        </div>
                    </div>
                </div>
                <ul className="list-ul">
                    {
                         Array.isArray(coverMessages)===false ? "" : coverMessages.map((ele,index)=>{
                             const path = "readCoverMessage?name="+ele.name+"&sex="+ele.sex+"&tel="+ele.tel+"&email="+ele.email+"&job="+ele.job
                             +"&schoolName="+ele.schoolName+"&date1="+ele.date1+"&date2="+ele.date2+"&major="+ele.major+"&academic="
                             +ele.academic+"&projectName="+ele.projectName+"&standard="+ele.standard+"&rol="+ele.rol+"&describes="+
                                     ele.describes+"&summary="+ele.summary+"&duty="+ele.duty+"&jobType="+ele.jobType+"&city="+ele.city+
                                     "&pay="+ele.pay+"&industry="+ele.industry+"&occupation="+ele.occupation+"&hobby="+ele.hobby+
                                     "&evaluate="+ele.evaluate+"&fileUpload="+ele.fileUpload;
                            return <div key={index}>
                                <li className="list-item">
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
                                    </div>
                                </li>
                            </div>

                        })
                    }
                </ul>
            <Footer/>
        </div>
    }
}

export default Home;