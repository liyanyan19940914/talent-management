import React,{Component} from 'react';
import {Link, browserHistory} from 'react-router';
import AdminNav from '../containers/adminNav';

class AdminHome extends Component{
    componentWillMount(){
        this.props.getAllSort();
    }
    search(){
        let sortName = this.refs.info.value;
        if(sortName){
            this.props.searchSort({sortName})
        }else{
            this.props.getAllSort();
        }
    }
    render(){
        let allSort = this.props.adminHome.AllSort;
        console.log(allSort);
        return <div>
            <AdminNav/>
                <div className="col-md-8 col-md-offset-2">
                    <div className="addSort">
                        <div className="contain-header">
                            <div>
                                <div className="adminSearch-box">
                                    <form className="searchForm clearfix">
                                        <input type="text" className="search-input" ref="info" placeholder="请根据类名进行搜索"/>
                                        <button type="button" className="search-button" onClick={this.search.bind(this)}>查询</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                <table className="table table-bordered location">
                    <thead>
                    <tr className="active font">
                        <td className="col-md-1">ID</td>
                        <td className="col-md-1">名称</td>
                        <td className="col-md-1">操作</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        Array.isArray(allSort) === false ? "":allSort.map((ele,index) => {
                            const path = "modifySort?sortName="+ele.sortName+"&id="+ele.id;
                            return <tr key={index}>
                                <td>{ele.id}</td>
                                <td>{ele.sortName}</td>
                                <td>
                                    <Link to={path} className="modify">编辑</Link>
                                    {/*<span className="operateion">删除</span>*/}
                                </td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
                    </div>
            </div>
        </div>
    }
}

export default AdminHome;