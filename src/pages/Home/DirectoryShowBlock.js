import React, { Component } from 'react';
import { Button } from 'antd';
import PicBox from './PicBox';

class DirectoryShowBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { title, btns, picBoxs } = this.props.data;
        const picBoxLen = picBoxs.length;
        return (
            <div className="directory-show-block">
                <div className="directory-show-left clearfix">
                    <div className="title">{title}</div>
                    <div className="clearfix button-group">
                        {
                            btns.map((btn, index) => (
                                <Button key={btn.text + index}>{btn.text}</Button>
                            ))
                        }
                    </div>
                </div>
                <div className="directory-show-right">
                    {
                        picBoxs.map((picBox, index) => (
                            <PicBox key={picBox.title + index} data={picBox} nomb={index >= picBoxLen - 2} />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default DirectoryShowBlock;