import React,{Component} from 'react';

class FileUpload extends Component{
    
    render(){
        return <div className="form-group">
            <label for="inputEmail3" className="col-sm-2 control-label">简历上传</label>
            <div className="col-sm-8">
                <input type="file" id="resume" ref="resume"/>
            </div>
        </div>
    }
}

export default FileUpload;