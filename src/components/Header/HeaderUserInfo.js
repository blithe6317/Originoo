import React from 'react';
import { connect } from 'react-redux';
import { Button, Avatar, Drawer } from 'antd';
import LoginModal from '../LoginModal';
import RegisterModal from '../RegisterModal';


import './header-userinfo.scss'
import { setJSON } from "../../util/localStorage";

class HeaderUserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoginModal: false,
            showRegisterModal: false,
            isOpenDrawer: false
        }
    }

    componentWillMount() {
        const { userInfo } = this.props;
        this.setState({ userInfo: userInfo });
    }

    componentWillReceiveProps(nextProps) {
        const { userInfo } = nextProps;
        this.setState({ userInfo: userInfo });
    };

    openLoginModal() {
        this.props.onShowLoginModal();
    }

    openRegisterModal() {
        this.props.onShowRegisterModal();
    }

    openDrawer() {
        this.setState({
            isOpenDrawer: true
        })
    }

    closeDrawer() {
        this.setState({
            isOpenDrawer: false
        })
    }

    loginout() {
        this.props.onLoginOut();
        this.closeDrawer();
    }

    render() {
        const { userInfo, isOpenDrawer } = this.state;
        const loginBox = <div className="login-hint-box right">

            <div className="left mr15">客服电话：4000-365-890</div>
            <div className="left mr15">请登录</div>
            <div className="left login-button-group">
                <Button type="primary"
                    size="small"
                    ghost
                    onClick={() => this.openLoginModal()}
                >
                    登录
                </Button>
                &nbsp;&nbsp;/&nbsp;&nbsp;
                <Button type="primary"
                    size="small"
                    ghost
                    onClick={() => this.openRegisterModal()}
                >
                    注册
                </Button>
            </div>
        </div>;
        const userDrawer = <div>
            <Avatar className="pointer"
                onClick={() => this.openDrawer()}
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Drawer
                title={userInfo ? userInfo.name : ''}
                placement="right"
                onClose={() => this.closeDrawer()}
                visible={isOpenDrawer}
                className="clearfix"
            >
                <div className="mb10">
                    <p>个人中心</p>
                    <p>发现新大陆</p>
                    <p>敬请期待</p>
                </div>
                <div className="mt10">
                    <Button
                        type="danger"
                        size="small"
                        ghost
                        onClick={() => this.loginout()}
                    >退出登录</Button>
                </div>
            </Drawer>
        </div>
        return (
            <div className="header-userinfo">
                {
                    userInfo ? userDrawer : loginBox
                }
                <LoginModal />
                <RegisterModal />
            </div>
        )
    }
}

const mapStateToProps = state => (state.loginStore);

const mapDispatchToProps = dispatch => ({
    onShowLoginModal: () => {
        dispatch({ type: 'login-show-modal', value: true });
    },
    onShowRegisterModal: () => {
        dispatch({ type: 'register-show-modal', value: true });
    },
    onLoginOut: () => {
        dispatch({ type: 'login-in', value: null });
        setJSON('userInfo', null);
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderUserInfo);