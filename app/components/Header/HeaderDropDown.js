import React from 'react';
import {Menu, Dropdown, Icon} from 'antd';
import PropTypes from 'prop-types';
import './header-dropdown.scss';

class HeaderDropDown extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {title, menu, type} = this.props;

        const menus = (
            <Menu>
                {
                    menu.map((men, index) => (
                        <Menu.Item key={index}>
                            <a target="_blank" rel="noopener noreferrer" href={men.href}>{men.title}</a>
                        </Menu.Item>
                    ))
                }
            </Menu>
        );
        return (
            <div className={'dropdown-box ' + (type === 'first' ? 'first-child' : '')}>
                <Dropdown overlay={menus}>
                    <a className="ant-dropdown-link" href="#">
                        {title} <Icon type="down"/>
                    </a>
                </Dropdown>
            </div>
        )
    }
}

HeaderDropDown.propTypes = {
    title: PropTypes.string.isRequired,
    menu: PropTypes.array.isRequired
};

export default HeaderDropDown;