import React, { Component } from 'react';

class Collection extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="user-center-collection">
                <p>我的收藏</p>
            </div>
        );
    }
}

export default Collection;