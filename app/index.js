import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

import App from './App'

import './static/css/index.scss'
import 'antd/dist/antd.css'

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);
