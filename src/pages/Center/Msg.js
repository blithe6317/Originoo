import React, { Component } from 'react';

class Msg extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="user-center-msg">
                <p>我的消息</p>
            </div>
        );
    }
}

export default Msg;