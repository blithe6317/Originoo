import React, {Component} from 'react';
import ReactDom from 'react-dom';

import App from './App'

import './static/css/index.scss'
import 'antd/dist/antd.css'

ReactDom.render(
    <App/>,
    document.getElementById('app')
);
