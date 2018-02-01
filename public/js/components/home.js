import React,{Component} from "react";

class Home extends Component{
    componentWillMount(){
        this.props.getAllCoverMessage();
    }
    render(){
        let coverMessages = this.props.home;
        console.log('component',coverMessages,Array.isArray(coverMessages));
        return <div>
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
                         Array.isArray(coverMessages)===false ? "ssss" : coverMessages.map((ele,index)=>{
                            return <div key={index}>
                                <li className="list-item">
                                    <div className="pli-top">
                                        <div className="clearfix">
                                            <div className="position-name fl">
                                                <h2 className="dib clearfix">
                                                    <a href="" className="wordCut fl">{ele.job}</a>
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
                                                <span className="wordCut">{ele.duty}</span>
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
    }
}

export default Home;