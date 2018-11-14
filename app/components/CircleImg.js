import React from 'react'
import './circleimg.scss'


class CircleImg extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {src, type, style, href} = this.props;
        return (
            <div className={'circle-img ' + (type ? type : '')} style={style ? style : null}>
                {
                    href ? (
                        <a href={href}>
                            <img src={src}/>
                        </a>
                    ) : (
                        <img src={src}/>
                    )
                }

            </div>
        );
    }
}

export default CircleImg;