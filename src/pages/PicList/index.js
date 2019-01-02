import React, { Component } from 'react';

import ConditionFilterBox from './ConditionFilterBox';
import PicListBox from './PicListBox';

import './index.scss';

class PicList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="piclist-container pt20">
                <ConditionFilterBox />
                <PicListBox></PicListBox>
            </div>
        );
    }
}

export default PicList;