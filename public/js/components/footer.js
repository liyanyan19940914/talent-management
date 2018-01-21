import React,{Component} from 'react';

class Footer extends Component{
    render(){
        return <div>
            <div className="toolBar">
                <div className="wrapper">
                    <em className="logo"></em>
                    <p className="text">
                        <span className="text-ele">
                            <span className="come-talent">在人才，寻找适合自己的职员</span>
                        </span>
                        <span className="count-wrapper text-ele">
                            <span>306186公司</span>
                            <span className="line">|</span>
                            <span>4011404职位</span>
                        </span>
                    </p>
                </div>
                <div className="toolBar-t">
                    <ul className="ulStyle">
                        <li>人才微信</li>
                        <li>人才微博</li>
                        <li>人才小程序</li>
                        <li>关于我们</li>
                        <li>帮助中心</li>
                        <li>商业合作</li>
                        <li>友情链接</li>
                    </ul>
                    <div className="location">
                        公司版权所有 © 1997-2017   售后服务电话：15829211124
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Footer;