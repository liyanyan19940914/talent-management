import React,{Component} from "react";

class Home extends Component{
    componentWillMount(){
        this.props.getAllCoverMessage();
    }
    render(){
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
        </div>
    }
}

export default Home;