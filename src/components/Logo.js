import React from 'react';
import logoImg from '../assets/img/logo.png'
import './logo.scss'

class Logo extends React.Component {
    render() {
        return (
            <div className="logo">
                <img src={logoImg} />
            </div>
        )
    }
}

export default Logo;