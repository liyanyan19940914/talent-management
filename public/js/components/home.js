import React,{Component} from "react";
import {Link, browserHistory} from 'react-router';
import Nav from '../containers/nav';
import Footer from '../containers/footer';

class Home extends Component{
    componentWillMount(){
        this.props.getAllCoverMessage();
    }
    search(){
        let info = this.refs.info.value;
        if (info){
            this.refs.allListItem.style.display = "none";
            this.refs.searchItem.style.display = "inline";
            this.props.searchInfo({info});
        }else{
            this.props.getAllCoverMessage();
            this.refs.allListItem.style.display = "inline";
            this.refs.searchItem.style.display = "none";
        }

    }
    render(){
        let coverMessages = this.props.home.message;
        let produce = Array.isArray(coverMessages)===false ? "" : coverMessages.filter((ele,index)=>{
            return ele.industry === "产品/技术";
        });
        let build = Array.isArray(coverMessages)===false ? "" : coverMessages.filter((ele,index)=>{
            return ele.industry === "地产/建筑";
        });
        let financial = Array.isArray(coverMessages)===false ? "" : coverMessages.filter((ele,index)=>{
            return ele.industry === "金融";
        });
        let sale = Array.isArray(coverMessages)===false ? "" : coverMessages.filter((ele,index)=>{
            return ele.industry === "销售/市场";
        });
        let make = Array.isArray(coverMessages)===false ? "" : coverMessages.filter((ele,index)=>{
            return ele.industry === "生产/制造";
        });
        let fullTime = Array.isArray(coverMessages)===false ? "" : coverMessages.filter((ele,index)=>{
            return ele.jobType === "全职";
        });
        let partTime = Array.isArray(coverMessages)===false ? "" : coverMessages.filter((ele,index)=>{
            return ele.jobType === "兼职";
        });
        let practice = Array.isArray(coverMessages)===false ? "" : coverMessages.filter((ele,index)=>{
            return ele.jobType === "实习";
        });
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
                <div className="searchItem" ref="searchItem">
                    <ul className="list-ul">
                        {
                            Array.isArray(produce) === false ? "" : produce.slice(0,6).map((ele,index) => {
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
                </div>
            <div className="allListItem" ref="allListItem">
                <div className="newsWrap clearfix">
                    <dl>
                        <dt className="newhead-line fullTime">
                            <span className="title-text">
                                最新网申
                            </span>
                            <span className="head-line-job more-fr">
                                <Link to="/moreMessage" className="head-line-more">更多</Link>
                            </span>
                        </dt>
                        {
                            Array.isArray(produce) === false ? "" : produce.slice(0,6).map((ele,index) => {
                                const path = "readCoverMessage?name="+ele.name+"&sex="+ele.sex+"&tel="+ele.tel+"&email="+ele.email+"&job="+ele.job
                                    +"&schoolName="+ele.schoolName+"&date1="+ele.date1+"&date2="+ele.date2+"&major="+ele.major+"&academic="
                                    +ele.academic+"&projectName="+ele.projectName+"&standard="+ele.standard+"&rol="+ele.rol+"&describes="+
                                    ele.describes+"&summary="+ele.summary+"&duty="+ele.duty+"&jobType="+ele.jobType+"&city="+ele.city+
                                    "&pay="+ele.pay+"&industry="+ele.industry+"&occupation="+ele.occupation+"&hobby="+ele.hobby+
                                    "&evaluate="+ele.evaluate+"&fileUpload="+ele.fileUpload+"&message_id="+ele.message_id;

                                return <div key={index}>
                                    <dd className="clearfix dd-content">
                                        <div className="pli-top">
                                            <div className="clearfix">
                                                <div className="position-name fl">
                                                    <h2 className="dib clearfix">
                                                        <Link to={path} className="wordCut fl">{ele.job}</Link>
                                                    </h2>
                                                </div>
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
                                    </dd>
                                </div>
                            })
                        }

                    </dl>
                    <dl>
                        <dt className="newhead-line partTime">
                            <span className="title-text">
                                最新兼职
                            </span>
                            <span className="head-line-job more-fr">
                                <Link to="/practiceMessage" className="head-line-more">更多</Link>
                            </span>
                        </dt>
                        {
                            Array.isArray(partTime) === false ? "" : partTime.slice(0,6).map((ele,index) => {
                                const path = "readCoverMessage?name="+ele.name+"&sex="+ele.sex+"&tel="+ele.tel+"&email="+ele.email+"&job="+ele.job
                                    +"&schoolName="+ele.schoolName+"&date1="+ele.date1+"&date2="+ele.date2+"&major="+ele.major+"&academic="
                                    +ele.academic+"&projectName="+ele.projectName+"&standard="+ele.standard+"&rol="+ele.rol+"&describes="+
                                    ele.describes+"&summary="+ele.summary+"&duty="+ele.duty+"&jobType="+ele.jobType+"&city="+ele.city+
                                    "&pay="+ele.pay+"&industry="+ele.industry+"&occupation="+ele.occupation+"&hobby="+ele.hobby+
                                    "&evaluate="+ele.evaluate+"&fileUpload="+ele.fileUpload+"&message_id="+ele.message_id;

                                return <div key={index}>
                                    <dd className="clearfix dd-content">
                                        <div className="pli-top">
                                            <div className="clearfix">
                                                <div className="position-name fl">
                                                    <h2 className="dib clearfix">
                                                        <Link to={path} className="wordCut fl">{ele.job}</Link>
                                                    </h2>
                                                </div>
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
                                    </dd>
                                </div>
                            })
                        }
                    </dl>
                    <dl>
                        <dt className="newhead-line practice">
                            <span className="title-text">
                                最新实习
                            </span>
                            <span className="head-line-job more-fr">
                                <Link to="/practiceMessage" className="head-line-more">更多</Link>
                            </span>
                        </dt>
                        {
                            Array.isArray(practice) === false ? "" : practice.slice(0,6).map((ele,index) => {
                                const path = "readCoverMessage?name="+ele.name+"&sex="+ele.sex+"&tel="+ele.tel+"&email="+ele.email+"&job="+ele.job
                                    +"&schoolName="+ele.schoolName+"&date1="+ele.date1+"&date2="+ele.date2+"&major="+ele.major+"&academic="
                                    +ele.academic+"&projectName="+ele.projectName+"&standard="+ele.standard+"&rol="+ele.rol+"&describes="+
                                    ele.describes+"&summary="+ele.summary+"&duty="+ele.duty+"&jobType="+ele.jobType+"&city="+ele.city+
                                    "&pay="+ele.pay+"&industry="+ele.industry+"&occupation="+ele.occupation+"&hobby="+ele.hobby+
                                    "&evaluate="+ele.evaluate+"&fileUpload="+ele.fileUpload+"&message_id="+ele.message_id;

                                return <div key={index}>
                                    <dd className="clearfix dd-content">
                                        <div className="pli-top">
                                            <div className="clearfix">
                                                <div className="position-name fl">
                                                    <h2 className="dib clearfix">
                                                        <Link to={path} className="wordCut fl">{ele.job}</Link>
                                                    </h2>
                                                </div>
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
                                    </dd>
                                </div>
                            })
                        }
                    </dl>
                </div>
                <p className="head-line produce">
                    <span className="title-text">IT／互联网／通信／电子</span>
                    <span className="head-line-ad more-fr">
                        <Link to="/moreMessage" className="head-line-more">更多</Link>
                    </span>
                </p>
                <ul className="list-ul">
                    {
                         Array.isArray(produce) === false ? "" : produce.slice(0,6).map((ele,index) => {
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
            <p className="head-line build">
                <span className="title-text">房地产建筑</span>
                <span className="head-line-ad more-fr">
                    <Link to="/moreMessage" className="head-line-more">更多</Link>
                </span>
            </p>
            <ul className="list-ul">
                {
                    Array.isArray(build) === false ? "" : build.slice(0,6).map((ele,index) => {
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
            <p className="head-line financial">
                <span className="title-text">金融</span>
                <span className="head-line-ad more-fr">
                        <Link to="/moreMessage" className="head-line-more">更多</Link>
                    </span>
            </p>
            <ul className="list-ul">
                {
                    Array.isArray(financial) === false ? "" : financial.slice(0,6).map((ele,index) => {
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
            <p className="head-line sale">
                <span className="title-text">销售/市场</span>
                <span className="head-line-ad more-fr">
                        <Link to="/moreMessage" className="head-line-more">更多</Link>
                    </span>
            </p>
            <ul className="list-ul">
                {
                    Array.isArray(sale) === false ? "" : sale.slice(0,6).map((ele,index) => {
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
            <p className="head-line make">
                <span className="title-text">生产/制造</span>
                <span className="head-line-ad more-fr">
                        <Link to="/moreMessage" className="head-line-more">更多</Link>
                    </span>
            </p>
            <ul className="list-ul">
                {
                    Array.isArray(make) === false ? "" : make.slice(0,6).map((ele,index) => {
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
            </div>
            <Footer/>
        </div>
    }
}

export default Home;