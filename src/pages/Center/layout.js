import React, { Component } from 'react';
import Link from 'umi/link';
import { Avatar, Row, Col, Card, Progress, Icon, Menu } from 'antd';
import { connect } from 'react-redux';

import './layout.scss';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

class CenterLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMenuKey: ['center']
        };
    }

    componentWillMount() {
        this.onUrlChange();
    }

    onUrlChange = () => {
        console.log('onUrlChange')
        const { pathname } = this.props.location;
        const key = pathname.split('/user-center/')[1];
        this.setState({ selectedMenuKey: [key] });
    }

    onMenuClick = ({ item, key, keyPath }) => {
        this.setState({ selectedMenuKey: keyPath });
    }

    render() {
        const { userInfo } = this.props;
        return (
            <div className="user-center-layout">
                <div className="gutter-example">
                    <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <Card
                                className="gutter-box user-info-box"
                                actions={[<Icon type="setting" />, <Icon type="edit" />]}
                            >
                                <Avatar size={128} icon="user" className="mb10" />
                                <p className="user-name">{userInfo.name}</p>
                                <p>交易账户：{userInfo.phone}</p>
                                <Row>
                                    <Col span={8}>
                                        <span className="progress-label text-inner">信息完整度：</span>
                                    </Col>
                                    <Col span={16}>
                                        <Progress percent={30} size="small"></Progress>
                                    </Col>
                                </Row>
                            </Card>
                            <Card className="mt10">
                                <Menu
                                    defaultSelectedKeys={this.state.selectedMenuKey}
                                    mode="inline"
                                    onClick={this.onMenuClick}
                                >
                                    <MenuItem key="center">
                                        <Link to='center'>个人中心</Link>
                                    </MenuItem>
                                    <SubMenu key="pics" title="我的图库">
                                        <MenuItem key="downloadlog">
                                            <Link to='downloadlog'>下载记录</Link>
                                        </MenuItem>
                                        <MenuItem key="collection">
                                            <Link to='collection'>我的收藏</Link>
                                        </MenuItem>
                                        <MenuItem key="follow">
                                            <Link to='follow'>我的关注</Link>
                                        </MenuItem>
                                        <MenuItem key="browse">
                                            <Link to='browse'>最近浏览</Link>
                                        </MenuItem>
                                        <MenuItem key="combo">
                                            <Link to='combo'>套餐情况</Link>
                                        </MenuItem>
                                    </SubMenu>
                                    <MenuItem key="order">
                                        <Link to='order'>我的订单</Link>
                                    </MenuItem>
                                    <MenuItem key="invoice">
                                        <Link to='invoice'>我的发票</Link>
                                    </MenuItem>
                                    <SubMenu key="money" title="费用中心">
                                        <MenuItem key="recharge">
                                            <Link to='recharge'>充值</Link>
                                        </MenuItem>
                                        <MenuItem key="coupon">
                                            <Link to='coupon'>优惠券</Link>
                                        </MenuItem>
                                    </SubMenu>
                                    <MenuItem key="author">
                                        <Link to='author'>我的授权书</Link>
                                    </MenuItem>
                                    <MenuItem key="setting">
                                        <Link to='setting'>账户设置</Link>
                                    </MenuItem>
                                    <MenuItem key="msg">
                                        <Link to='msg'>消息</Link>
                                    </MenuItem>
                                </Menu>
                            </Card>
                        </Col>
                        <Col className="gutter-row" span={18}>
                            <div className="">
                                {this.props.children}
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { loginStore, userCenterStore } = state;
    return { ...loginStore, ...userCenterStore };
};

export default connect(mapStateToProps)(CenterLayout);