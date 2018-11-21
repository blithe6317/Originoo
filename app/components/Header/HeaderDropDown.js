import React from 'react';
import {Link} from 'react-router-dom';
import {Menu, Dropdown} from 'antd';
import PropTypes from 'prop-types';
import './header-dropdown.scss';

class HeaderDropDown extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {menu, type, point} = this.props;
        const {title, href, children} = menu;
        const getMenu = (menu, index) => {
            return (
                <Menu.Item key={menu.title + index}>
                    {
                        menu.href ? (
                            <Link target="_blank" rel="noopener noreferrer" to={menu.href}>{menu.title}</Link>
                        ) : menu.title
                    }

                </Menu.Item>
            )
        };
        const menuRender = children ? (
            <Menu>
                {
                    children.map((men, index) => (
                        men.children ? (
                            <Menu.SubMenu title={men.title} key={index} className="menu-submenu-box">
                                {
                                    men.children.map((child, index) => getMenu(child, index))
                                }
                            </Menu.SubMenu>
                        ) : (
                            getMenu(men, index)
                        )
                    ))
                }
            </Menu>
        ) : null;
        let aLink = <Link className="ant-dropdown-link" to={href}>
            {title}
        </Link>;

        if (point) {
            let text = '';
            let color = 'red';
            if (typeof point === 'object') {
                if (point.text) {
                    text = point.text;
                }
                if (point.color) {
                    color = point.color;
                }

            } else {
                text = point;
            }
            aLink = <Link className="ant-dropdown-link relative" to={href}>
                {title}
                <div className="point" style={{backgroundColor: color}}>{text}</div>
            </Link>;
        }

        return (
            <div className={'dropdown-box ' + (type === 'first' ? 'first-child' : '')}>
                {
                    menuRender ? <Dropdown overlay={menuRender}>
                        {aLink}
                    </Dropdown> : aLink
                }

            </div>
        )
    }
}

export default HeaderDropDown;