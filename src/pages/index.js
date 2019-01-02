import React, { Component } from 'react';

import { Layout } from 'antd';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer);


import '../assets/css/index.scss'
import 'antd/dist/antd.css'

class LayoutBasic extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const contentClass = (window.location.href.indexOf('/index') > 0) ? '' : 'ant-layout-content-padding'
        return (
            <Provider store={store}>
                <Layout>
                    {/* <Header className={contentClass}></Header> */}
                    <Layout.Content className={contentClass}>{this.props.children}</Layout.Content>
                    {/* <Footer></Footer> */}
                </Layout>
            </Provider>
        )
    }
}

export default LayoutBasic;