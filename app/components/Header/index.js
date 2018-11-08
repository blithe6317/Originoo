import React from 'react';
import './index.scss'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="header">
                这里是header
            </div>
        )
    }
}

export default Header;