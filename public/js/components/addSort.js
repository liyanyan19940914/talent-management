import React,{Component} from 'react';
import AdminNav from '../containers/adminNav';

class AddSort extends Component{
    addClassName(){
        let sortName = this.refs.sortName.value;
        console.log("hjkko",sortName);
        this.props.addClass({sortName});
    }

    render(){
        return <div>
            <AdminNav/>
                <form className="form-horizontal addSort">
                    <div className="form-group">
                        <label  className="col-sm-2 control-label">类名</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control"  ref="sortName" placeholder=""/>
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