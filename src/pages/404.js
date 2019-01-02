import React, { Component } from 'react';

class UndefinedPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <img
                    style={{ width: '100%' }}
                    src="http://originoo-1.b0.upaiyun.com/dev/sites/image/sys-404_5b3f3a5.jpg" />
            </div>
        );
    }
}

export default UndefinedPage;