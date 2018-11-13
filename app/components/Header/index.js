import React from 'react';
import HeaderDropDown from './HeaderDropDown'
import Logo from '../Logo'

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
        return (
            <div className="header">
                <Logo/>
                <HeaderDropDown title={title1} menu={menu1} className="first-child"/>
                <HeaderDropDown title={title1} menu={menu1}/>
            </div>
        )
    }
}

export default Header;