import React,{Component} from 'react';
import {Link, browserHistory} from 'react-router';
import AdminNav from '../containers/adminNav';

class EditSort extends Component{
    componentDidMount(){
        this.refs.sortName.value = this.props.location.query.sortName;
    }
    modifySort(){
        let oldSortName = this.props.location.query.sortName;
        let sortName = this.refs.sortName.value;
        this.props.editSort({oldSortName,sortName});
    }
    componentWillUpdate(nextProps){
        if(nextProps.editSortName.isUpdateSort === 1){
            alert("修改成功");
            this.props.resetUpdateSort({isUpdateSort:false});
        }
        else if(nextProps.editSortName.isUpdateSort === 0){
            alert("修改失败");
            this.props.resetUpdateSort({isUpdateSort:false});
        }
    }
    render(){
        return <div>
            <AdminNav/>
            <form className="form-horizontal addSort">
                <div className="form-group">
                    <label  className="col-sm-2 control-label">类名</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control"  ref="sortName" placeholder=""/>
                        <span className="input-tips" id="sortTip"></span>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="button" className="btn btn-success" onClick={this.modifySort.bind(this)}>确定</button>
                    </div>
                </div>
            </form>
        </div>
    }
}

export default EditSort;