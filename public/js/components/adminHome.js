import React,{Component} from 'react';
import AdminNav from '../containers/adminNav';

class AdminHome extends Component{
    componentWillMount(){
        this.props.getAllSort();
    }
    render(){
        let allSort = this.props.adminHome.AllSort;
        console.log(allSort);
        return <div>
            <AdminNav/>
            <div className="addSort">
                <div className="col-md-8 col-md-offset-2">
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
                                    <span>编辑</span>
                                    <span className="operateion">删除</span>
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