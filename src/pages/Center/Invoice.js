import React, { Component } from 'react';

class Invoice extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="user-center-invoice">
                <p>我的发票</p>
            </div>
        );
    }
}

export default Invoice;