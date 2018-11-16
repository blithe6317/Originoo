import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './containers/Home';
import Personal from './containers/Personal';

import './app.scss'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Router>
                <div className="app">
                    <Header/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/personal" component={Personal}/>
                    <Footer/>
                </div>
            </Router>
        )
    }
}

export default App;