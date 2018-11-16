import React from 'react';
import HeaderDropDown from './HeaderDropDown';
import Logo from '../Logo';
import HeaderUserInfo from './HeaderUserInfo';
import {Link} from 'react-router-dom';

import './index.scss'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const title1 = '动漫';
        const menu1 = [{
            title: '热血',
            type: 'hot'
        }, {
            title: '言情',
            type: 'ff'
        }];
        const title2 = '漫画';
        const menu2 = [{
            title: '热血',
            type: 'hot'
        }, {
            title: '言情',
            type: 'ff'
        }];
        return (
            <div className="header clearfix">
                <Link to="/">
                    <Logo/>
                </Link>
                <HeaderDropDown title={title1} menu={menu1} type="first"/>
                <HeaderDropDown title={title2} menu={menu2}/>
                <HeaderUserInfo/>

            </div>
        )
    }
}

export default Header;