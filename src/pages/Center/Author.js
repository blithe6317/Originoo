import React, { Component } from 'react';

class Author extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="user-center-author">
                <p>我的授权书</p>
            </div>
        );
    }
}

export default Author;