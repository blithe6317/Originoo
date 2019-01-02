import React, { Component } from 'react';
import Link from 'umi/link';

class PicBox extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { nomb, data } = this.props;
        const { title, img, href } = data;
        return (
            <div
                className="pic-show-box left"
                style={{ marginBottom: nomb ? '0' : '10px' }}
            >
                <Link to="/">
                    <div
                        className="pic-show-content relative default-background"
                        style={{ backgroundImage: `url(${img})` }}>
                        <div className="pic-show-text">{title}</div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default PicBox;