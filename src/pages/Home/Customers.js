import React, { Component } from 'react';
import { Col, Row } from 'antd';

class Customers extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="customer-show-box default-background">
                <div className="title">我们的客户</div>
                <div className="customer-show-content clearfix">
                    <Row>
                        <Col span={6}>
                            <div
                                className="left img-box default-background"
                                style={{ backgroundImage: 'url(http://originoo-1.b0.upaiyun.com/dev/sites/image/icon_index_customer01.png)' }}
                            >
                            </div>
                        </Col>
                        <Col span={6}>
                            <div
                                className="left img-box default-background"
                                style={{ backgroundImage: 'url(http://originoo-1.b0.upaiyun.com/dev/sites/image/icon_index_customer02.png)' }}
                            >
                            </div>
                        </Col>
                        <Col span={6}>
                            <div
                                className="left img-box default-background"
                                style={{ backgroundImage: 'url(http://originoo-1.b0.upaiyun.com/dev/sites/image/icon_index_customer03.png)' }}
                            >
                            </div>
                        </Col>
                        <Col span={6}>
                            <div
                                className="left img-box default-background"
                                style={{ backgroundImage: 'url(http://originoo-1.b0.upaiyun.com/dev/sites/image/icon_index_customer04.png)' }}
                            >
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <div
                                className="left img-box default-background"
                                style={{ backgroundImage: 'url(http://originoo-1.b0.upaiyun.com/dev/sites/image/icon_index_customer05.png)' }}
                            >
                            </div>
                        </Col>
                        <Col span={6}>
                            <div
                                className="left img-box default-background"
                                style={{ backgroundImage: 'url(http://originoo-1.b0.upaiyun.com/dev/sites/image/icon_index_customer06.png)' }}
                            >
                            </div>
                        </Col>
                        <Col span={6}>
                            <div
                                className="left img-box default-background"
                                style={{ backgroundImage: 'url(http://originoo-1.b0.upaiyun.com/dev/sites/image/icon_index_customer07.png)' }}
                            >
                            </div>
                        </Col>
                        <Col span={6}>
                            <div
                                className="left img-box default-background"
                                style={{ backgroundImage: 'url(http://originoo-1.b0.upaiyun.com/dev/sites/image/icon_index_customer08.png)' }}
                            >
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <div
                                className="left img-box default-background"
                                style={{ backgroundImage: 'url(http://originoo-1.b0.upaiyun.com/dev/sites/image/icon_index_customer09.png)' }}
                            >
                            </div>
                        </Col>
                        <Col span={6}>
                            <div
                                className="left img-box default-background"
                                style={{ backgroundImage: 'url(http://originoo-1.b0.upaiyun.com/dev/sites/image/icon_index_customer10.png)' }}
                            >
                            </div>
                        </Col>
                        <Col span={6}>
                            <div
                                className="left img-box default-background"
                                style={{ backgroundImage: 'url(http://originoo-1.b0.upaiyun.com/dev/sites/image/icon_index_customer11.png)' }}
                            >
                            </div>
                        </Col>
                        <Col span={6}>
                            <div
                                className="left img-box default-background"
                                style={{ backgroundImage: 'url(http://originoo-1.b0.upaiyun.com/dev/sites/image/icon_index_customer12.png)' }}
                            >
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Customers;