import React from 'react';
import {Modal, Button, Input, Icon} from 'antd';

import {connect} from 'react-redux';

import './login-modal.scss'
import yzmImg from '../static/img/yzm.png';

class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasLoginModal: false,
            name: '',
            password: '',
            yzm: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        const {hasLoginModal, userInfo} = nextProps;
        this.setState({hasLoginModal: hasLoginModal});
        this.setState({userInfo: userInfo});
    };

    handleName(e) {
        this.setState({
            name: e.target.value
        });
    }

    handlePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleYzm(e) {
        this.setState({
            yzm: e.target.value
        });
    }

    handleLoginOk(e) {
        const {name, password, yzm} = this.state;
        const value = {
            name, password, yzm
        }
        
        this.props.onLoginIn(value);
    }

    handleLoginCancel(e) {
        this.props.onCloseLoginModal();
    }

    render() {
        const {name, password, yzm} = this.state;
        const yzmBox = <div className="login-yzm-box">
            <img src={yzmImg}/>
            <Button shape="circle" icon="redo"/>
        </div>;
        return (
            <Modal
                className="login-modal"
                title='登录'
                visible={this.state.hasLoginModal}
                onOk={() => this.handleLoginOk()}
                onCancel={() => this.handleLoginCancel()}
                footer={[
                    <Button
                        key="submit"
                        type="primary"
                        onClick={() => this.handleLoginOk()}>
                        登录
                    </Button>
                ]}
            >
                <div className="content-item">
                    <Input
                        addonBefore="账号"
                        value={name}
                        onChange={(e) => this.handleName(e)}
                    />
                </div>
                <div className="content-item">
                    <Input
                        addonBefore="密码"
                        value={password}
                        onChange={(e) => this.handlePassword(e)}
                    />
                </div>
                <div className="content-item">
                    <Input
                        addonBefore="验证码"
                        addonAfter={yzmBox}
                        value={yzm}
                        onChange={(e) => this.handleYzm(e)}
                    />
                </div>
                <div className="clearfix p5">
                    <a className='block left'>忘记密码 </a>
                    <a className='block right'>注册 </a>
                </div>

            </Modal>
        )
    }
}

const mapStateToProps = state => (state.loginStore);

const mapDispatchToProps = dispatch => ({
    onCloseLoginModal: () => {
        dispatch({type: 'login-show-modal', value: false});
    },
    onLoginIn: (value) => {
        dispatch({type: 'login-in', value});
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);