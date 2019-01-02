import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert, Row, Col, Card, Button } from 'antd';
import Link from 'umi/link';

import { getUserNewDown } from '../../actions/user-center';

class UserCenter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonActive: 'all'
        };
    }

    componentWillReceiveProps(nextProp) {
        console.log('nextProps:', nextProp)
    }

    componentWillMount() {
        this.props.getUserNewDownLoadInfo();
    }

    showDownloadType(type) {
        this.setState({
            buttonActive: type
        })
    }

    render() {
        const { userInfo, userNewDownloadInfo } = this.props;
        const { all, photo, vect, video } = userNewDownloadInfo ? userNewDownloadInfo : {
            all: 0,
            photo: 0,
            vect: 0,
            video: 0
        }
        return (
            <div className="user-center">
                <Row>
                    <Col className="pr3" span={18}>
                        <Card
                            className="user-center-account"
                            title="我的账户"
                            style={{ height: 230 }}
                        >
                            <Row className="">
                                <Col span={18}>
                                    <p>
                                        Hi! {userInfo.name},您的账户余额为
                                <span style={{ color: 'red', fontSize: '38px' }}> {userInfo.remainingsum} </span>
                                        元！
                                </p>
                                </Col>
                                <Col span={6}>
                                    <Button className="recharge-btn" type="primary">充值</Button>
                                </Col>
                            </Row>
                            <Row className="text-center user-center-desc">
                                <Col span={8}>
                                    <span>未支付订单</span>
                                    <br />
                                    <span className="number">{userInfo.nopayorder}</span>
                                </Col>
                                <Col span={8}>
                                    <span>已购买素材</span>
                                    <br />
                                    <span className="number">{userInfo.haspics}</span>
                                </Col>
                                <Col span={8}>
                                    <span>未开票金额</span>
                                    <br />
                                    <span className="number">{userInfo.noinvoice}</span>元
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col className="pl3" span={6}>
                        <Card
                            className="help-center-card"
                            style={{ height: 230 }}
                            title={<div className="clearfix">
                                <div className="left">帮助中心</div>
                                <div className="right"
                                    style={{ fontSize: '12px', fontWeight: '500', lineHeight: '24px' }}
                                >
                                    <Link to="/index">查看更多 >></Link>
                                </div>
                            </div>}>
                            <ul>
                                <li>
                                    <Link to="/index">购买的图片可以重复下载吗？</Link>
                                </li>
                                <li>
                                    <Link to="/index">购买的图片可以重复下载吗？</Link>
                                </li>
                                <li>
                                    <Link to="/index">购买的图片可以重复下载吗？</Link>
                                </li>
                                <li>
                                    <Link to="/index">购买的图片可以重复下载吗？</Link>
                                </li>
                                <li>
                                    <Link to="/index">购买的图片可以重复下载吗？</Link>
                                </li>
                                <li>
                                    <Link to="/index">购买的图片可以重复下载吗？</Link>
                                </li>
                            </ul>
                            <p className="text-center">联系客服：400-8599-587</p>
                        </Card>
                    </Col>
                </Row>
                <Card
                    className="new-download-card mt6 pb10"
                    title={<div className="clearfix">
                        <div className="left">最新下载</div>
                        <div className="right"
                            style={{ fontSize: '12px', fontWeight: '500', lineHeight: '24px' }}
                        >
                            <Link to="/user-center/downloadlog">查看更多 >></Link>
                        </div>
                    </div>}
                >
                    <div>
                        <Button
                            className={this.state.buttonActive === 'all' ? "active" : ""}
                            onClick={() => this.showDownloadType('all')}
                        >全部 ({all})</Button>
                        <Button
                            className={this.state.buttonActive === 'photo' ? "active" : ""}
                            onClick={() => this.showDownloadType('photo')}
                        >图片 ({photo})</Button>
                        <Button
                            className={this.state.buttonActive === 'vect' ? "active" : ""}
                            onClick={() => this.showDownloadType('vect')}
                        >矢量 ({vect})</Button>
                        <Button
                            className={this.state.buttonActive === 'video' ? "active" : ""}
                            onClick={() => this.showDownloadType('video')}
                        >视频 ({video})</Button>
                    </div>
                    <div className="mt15">
                        <Alert type="info" message="暂无下载作品" ></Alert>
                    </div>
                </Card>
                <Card
                    className="new-download-card mt6 pb10"
                    title={<div className="clearfix">
                        <div className="left">我的收藏</div>
                        <div className="right"
                            style={{ fontSize: '12px', fontWeight: '500', lineHeight: '24px' }}
                        >
                            <Link to="/user-center/collection">查看更多 >></Link>
                        </div>
                    </div>}>
                    <Alert type="info" message="暂无收藏作品" ></Alert>
                </Card>
                <Card
                    className="new-download-card mt6 pb10"
                    title={<div className="clearfix">
                        <div className="left">最近浏览</div>
                        <div className="right"
                            style={{ fontSize: '12px', fontWeight: '500', lineHeight: '24px' }}
                        >
                            <Link to="/user-center/browse">查看更多 >></Link>
                        </div>
                    </div>}>
                    <Alert type="info" message="暂无浏览记录" ></Alert>
                </Card>
            </div>
        );
    }
}


const mapStateToProps = state => {
    const { loginStore, userCenterStore } = state;
    return { ...loginStore, ...userCenterStore };
};

const mapDispatchToProps = dispatch => ({
    getUserNewDownLoadInfo: () => {
        getUserNewDown({ dispatch });
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserCenter);