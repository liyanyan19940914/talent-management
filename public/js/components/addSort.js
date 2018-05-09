import React,{Component} from 'react';
import {Link, browserHistory} from 'react-router';
import AdminNav from '../containers/adminNav';

class AddSort extends Component{
    addClassName(){
        let sortName = this.refs.sortName.value;
        console.log("hjkko",sortName);
        this.props.addClass({sortName});
    }
    componentWillUpdate(nextProps){
        if(nextProps.addSort.isExitSort === "类名已存在，请重新输入！"){
            $("#sortTip").text("类名已存在，请重新输入！");
            this.props.resetSort({isExitSort:false});
        }
        else if(nextProps.addSort.isExitSort){
            browserHistory.push('/adminLogin');
            this.props.resetSort({isExitSort:false});
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
                            <button type="button" className="btn btn-success" onClick={this.addClassName.bind(this)}>添加</button>
                        </div>
                    </div>
                </form>
        </div>
    }
}

export default AddSort;