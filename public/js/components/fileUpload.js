import React,{Component} from 'react';
import request from 'superagent';

class FileUpload extends Component{
    isClick() {
        let resume = this.refs.resume;
        if (resume.files && resume.files[0]) {
            let fileObj = new FileReader();
            fileObj.readAsDataURL(resume.files[0]);
        }
        this.handleClick(resume.files[0]);
    }
    handleClick(file){
        let formData = new FormData();
        formData.append('avatar',file);
        request
            .post('/profile')
            .send(formData)
            .end((err,res)=>{
                console.log(res.body.filePath);
                this.props.fileUpload(res.body.filePath);
            })

    }
    render(){
        return <div className="form-group">
            <label for="inputEmail3" className="col-sm-2 control-label" >简历上传</label>
            <div className="col-sm-8">
                <input type="file" id="resume" ref="resume" onChange={this.isClick.bind(this)}/>
            </div>
        </div>
    }
}

export default FileUpload;