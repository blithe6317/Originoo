import React from 'react';
import { Layout, Card } from 'antd';
import Link from 'umi/link';
import './index.scss'

class Footer extends React.Component {
    render() {
        return (
            <Layout.Footer className="footer">
                <div className="footer-about-me">
                    <div className="footer-about-other">
                        <span>友情链接：</span>
                        <span ><a target="_blank" href="https://www.chuangkit.com/" rel="noopener noreferrer">平面设计</a></span>
                        <span ><a target="_blank" href="http://www.uigreat.com/" rel="noopener noreferrer">优阁网</a></span>
                        <span ><a target="_blank" href="https://www.xiusheji.com/" rel="noopener noreferrer">秀设计</a></span>
                        <span ><a target="_blank" href="http://51mockup.com/" rel="noopener noreferrer">模库网</a></span>
                        <span ><a target="_blank" href="https://www.fotor.com.cn/sheji/haibao.html" rel="noopener noreferrer">海报设计</a></span>
                        <span ><a target="_blank" href="http://www.biransign.com/" rel="noopener noreferrer">导视方案下载</a></span>
                        <span ><a target="_blank" href=" http://www.shejigh.com/" rel="noopener noreferrer">设计干货</a></span>
                        <span ><a target="_blank" href="http://www.hao-mama.com/" rel="noopener noreferrer">乐贝网</a></span>
                        <span ><Link to="p.friendshiplink.php" target="_blank">更多&gt;&gt;</Link></span>
                    </div>
                    <div className="footer-about-link-box clearfix">
                        <div className="left footer-about-link-list">
                            <p className="title">我们的产品</p>
                            <p><Link to="/">照片</Link></p>
                            <p><Link to="/">矢量</Link></p>
                            <p><Link to="/">视频</Link></p>
                        </div>
                        <div className="left footer-about-link-list">
                            <p className="title">公司信息</p>
                            <p><Link to="/">关于我们</Link></p>
                            <p><Link to="/">联系方式</Link></p>
                            <p><Link to="/">签约供图</Link></p>
                        </div>
                        <div className="left footer-about-link-list">
                            <p className="title">资源</p>
                            <p><Link to="/">常见问题</Link></p>
                            <p><Link to="/">使用条款</Link></p>
                            <p><Link to="/">授权协议</Link></p>
                            <p><Link to="/">网站地图</Link></p>
                        </div>
                        <div className="left footer-about-link-list">
                            <p className="title">联系方式</p>
                            <p>4000-365-890</p>
                            <p>工作时间：</p>
                            <p>周一~周五 9:00 - 18:00</p>
                        </div>
                        <div className="left footer-about-link-list">
                            <p className="title">公众号</p>
                            <img alt="example" src="http://originoo-1.b0.upaiyun.com/dev/sites/image/wachat-erweima_509928c.jpg" width="120" />
                        </div>
                    </div>
                </div>
                <div className="footer-company">
                    <span>
                        苏州原本图像科技有限公司&nbsp;&nbsp;Copyright©2016 -
                        <span id="now_year_copyright">2018</span>
                        &nbsp;&nbsp;All rights reserved.</span>
                    <span>|</span>
                    <strong><a href="http://www.miitbeian.gov.cn/" target="_blank" rel="noopener noreferrer">备案号：苏ICP备14011639号</a></strong>
                    <span>|</span>
                    <span >增值业务经营许可证：苏B2-20180385</span>
                </div>
            </Layout.Footer>
        )
    }
}

export default Footer;