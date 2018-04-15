import React,{Component} from "react";
import {Link, browserHistory} from 'react-router';
import Nav from '../containers/nav';
import Footer from '../containers/footer';

class Home extends Component{
    componentWillMount(){
        // const index = -2;
        // this.props.onShowAdd(index);
        this.props.getAllCoverMessage();
    }
    search(){
        let info = this.refs.info.value;
        if (info){
            this.props.searchInfo({info});
        }else{
            this.props.getAllCoverMessage();
        }

    }
    // ShowByPageAdd() {
    //     console.log(this.props.home.index);
    //     this.props.onShowAdd(this.props.home.index);
    // }
    //
    // ShowByPageSub() {
    //     this.props.onShowSub(this.props.home.index);
    // }
    render(){
        let coverMessages = this.props.home.message;
        return <div>
            <Nav/>
                <div className="contain-header">
                    <div className="search-wrapper">
                        <div className="search-box">
                            <form className="searchForm clearfix">
                                <input type="text" className="search-input" ref="info" placeholder="搜索职位，地点"/>
                                <button type="button" className="search-button" onClick={this.search.bind(this)}>查询</button>
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
                                     "&evaluate="+ele.evaluate+"&fileUpload="+ele.fileUpload+"&message_id="+ele.message_id;
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
            {/*<ul className="pager">*/}
                {/*<li id="older"><a onClick={this.ShowByPageSub.bind(this)}>← 上一页</a></li>*/}
                {/*<li id="newer"><a onClick={this.ShowByPageAdd.bind(this)}>下一页 →</a></li>*/}
            {/*</ul>*/}
            <Footer/>
        </div>
    }
}

export default Home;