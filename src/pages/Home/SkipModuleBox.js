import React from 'react';
import {Button} from 'antd';

class SkipModuleBox extends React.Component {
    render() {
        const {skips} = this.props;
        return (
            <div className="skip-modules-box clearfix">
                {
                    skips.map((skip, index) => (
                        <div key={index} className="skip-module-item left">
                            <div className="skip-module-content" style={{backgroundImage: `url(${skip.img})`}}>
                                <div className="skip-module-desc">
                                    <div className="skip-module-text">{skip.text}</div>
                                    <Button className="skip-module-btn" ghost>{skip.btn}</Button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default SkipModuleBox;