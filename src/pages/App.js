import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from '../components/Header';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Layout>
                <Header></Header>
                <Layout.Content>{this.props.children}</Layout.Content>
            </Layout>
        );
    }
}

export default App;