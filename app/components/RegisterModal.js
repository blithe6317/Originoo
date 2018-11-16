import React from 'react';
import {Modal, Button, Radio, Row, Col} from 'antd';
import {pwReg, phoneReg} from "../util/regex";
import {setJSON} from "../util/localStorage";
import {connect} from "react-redux";

import InputReg from './InputReg';

class RegisterModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasRegisterModal: false,
            name: '',
            password: '',
            phone: '',
            sex: 0,

        }

    }

    componentWillReceiveProps(nextProps) {
        const {hasRegisterModal, userInfo} = nextProps;
        this.setState({hasRegisterModal: hasRegisterModal});
        this.setState({userInfo: userInfo});
    };

    handleName(e) {
        this.setState({
            name: e.target.value
        });
    }
    
    handlePhone(e) {
        this.setState({
            phone: e.target.value
        });
    }

    handlePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleSex(e) {
        this.setState({
            sex: e.target.value
        });
    }

    handleRegisterOk() {
        const {name, password, sex, phone} = this.state;
        this.props.onRegister({name, password, sex, phone})
    }

    handleRegisterCancel() {
        this.props.onCloseRegisterModal();
    }

    render() {
        const {name, password, phone, sex} = this.state;
        return (
            <Modal
                className="login-modal"
                title='注册'
                visible={this.state.hasRegisterModal}
                onOk={() => this.handleRegisterOk()}
                onCancel={() => this.handleRegisterCancel()}
                footer={[
                    <Button
                        key="submit"
                        type="primary"
                        onClick={() => this.handleRegisterOk()}>
                        注册
                    </Button>
                ]}
            >
                <Row className="content-item">
                    <Col className="filed-label" span={4}>
                        账号:
                    </Col>
                    <Col span={20}>
                        <InputReg
                            value={name}
                            onChange={(e) => this.handleName(e)}
                        />
                    </Col>
                </Row>
                <Row className="content-item">
                    <Col className="filed-label" span={4}>
                        手机号:
                    </Col>
                    <Col span={20}>
                        <InputReg
                            regex={phoneReg}
                            regexText='请填写正确的手机号'
                            value={phone}
                            onChange={(e) => this.handlePhone(e)}
                        />
                    </Col>
                </Row>
                <Row className="content-item">
                    <Col className="filed-label" span={4}>
                        密码:
                    </Col>
                    <Col span={20}>
                        <InputReg
                            ref='pwInput'
                            regex={pwReg}
                            regexText="密码首位为大写字母，最少六位"
                            value={password}
                            onChange={(e) => this.handlePassword(e)}
                        />
                    </Col>
                </Row>
                <Row className="content-item">
                    <Col className="filed-label" span={4}>
                        性别：
                    </Col>
                    <Col span={20}>
                        <Radio.Group onChange={(e) => this.handleSex(e)} value={sex}>
                            <Radio value={0}>男</Radio>
                            <Radio value={1}>女</Radio>
                        </Radio.Group>
                    </Col>
                </Row>

            </Modal>
        )
    }
}

const mapStateToProps = state => (state.loginStore);

const mapDispatchToProps = dispatch => ({
    onCloseRegisterModal: () => {
        dispatch({type: 'register-show-modal', value: false});
    },
    onRegister: (value) => {
        dispatch({type: 'login-in', value});
        setJSON('userInfo', value);
        dispatch({type: 'register-show-modal', value: false});
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterModal);