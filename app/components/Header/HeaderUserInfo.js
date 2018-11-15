import React from 'react';
import {connect} from 'react-redux';
import {Button, Avatar} from 'antd';
import LoginModal from '../LoginModal';


import './header-userinfo.scss'

class HeaderUserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoginModal: false,
            showRegisterModal: false

        }
    }

    componentWillReceiveProps(nextProps) {
        const {userInfo} = nextProps;
        this.setState({userInfo: userInfo});
    };

    openLoginModal() {
        this.props.onShowLoginModal();
    }

    render() {
        const {userInfo} = this.state;
        const loginBox = <div className="login-hint-box right">
            <div className="left mr15">请登录</div>
            <div className="left login-button-group">
                <Button type="primary"
                        size="small"
                        ghost
                        onClick={() => this.openLoginModal()}>
                    登录
                </Button>
                &nbsp;&nbsp;/&nbsp;&nbsp;
                <Button type="primary" size="small" ghost>注册</Button>
            </div>
            <LoginModal/>
        </div>;

        return (
            <div className="header-userinfo">
                {
                    userInfo ?
                        <Avatar
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                        :
                        loginBox
                }

            </div>
        )
    }
}

const mapStateToProps = state => (state.loginStore);

const mapDispatchToProps = dispatch => ({
    onShowLoginModal: () => {
        dispatch({type: 'login-show-modal', value: true});
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderUserInfo);