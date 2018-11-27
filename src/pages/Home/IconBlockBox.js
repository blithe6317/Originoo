import React, {Component} from 'react';

class IconBlockBox extends Component {
    render() {
        const {data} = this.props;
        return (
            <div className="icon-block-box clearfix">
                {
                    data.map((iconblock, index) => (
                        <div key={index} className="icon-block-item left">
                            <div className="icon-block-content">
                                <img src={iconblock.img}/>
                                <h2 className="title">{iconblock.title}</h2>
                                {
                                    iconblock.texts.map((text, index) => (
                                        <p key={text + index} className="mb5">{text.text}</p>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default IconBlockBox;