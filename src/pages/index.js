import React, { Component } from 'react';

import { Layout } from 'antd';
import Header from '../components/Header';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer);


import '../assets/css/index.scss'
import 'antd/dist/antd.css'

class LayoutBasic extends Component {
    render() {
        return (
            <Provider store={store}>
                <Layout>
                    <Header></Header>
                    <Layout.Content>{this.props.children}</Layout.Content>
                </Layout>
            </Provider>
        )
    }
}

export default LayoutBasic;