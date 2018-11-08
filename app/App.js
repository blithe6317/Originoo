import React, {Component} from 'react';
import Header from './components/Header';
import Footer from './components/Footer'

import './app.scss'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="app">
                <Header/>
                <h3> Originoo </h3>
                <Footer/>
            </div>
        )
    }
}

export default App;