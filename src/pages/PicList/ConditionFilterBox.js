import React, { Component } from 'react';
import { Menu, Dropdown, Button, Icon, Checkbox } from 'antd';
import { connect } from 'react-redux';

import { getPicList } from '../../actions/pic-list';

const { Item, SubMenu } = Menu;

class ConditionFilterBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            picType: 'all',
            picTypeName: '全部图片',
            priceChecked: [],
            sortType: 'hot',
            compositionType: '',
            personaeNumber: -1,
            personaeNumberLabel: '',
            personaeSex: -1,
            personaeSexLabel: '',
            personaeAge: -1,
            personaeAgeLabel: '',
            personaeRace: -1,
            personaeRaceLabel: '',
            color: -1,
            colorLabel: '',
            conditionsArray: [],
            conditions: {}
        };
    }

    onPicTypeChange = ({ key }) => {
        let picTypeName = '';
        switch (key) {
            case 'pic':
                picTypeName = '照片'
                break;
            case 'vect':
                picTypeName = '矢量'
                break;
            case 'video':
                picTypeName = '视频'
                break;
            default:
                picTypeName = '全部图片'
        }
        setTimeout(() => {
            this.setState({
                picType: key,
                picTypeName
            })
        }, 100);
    }

    onPriceMenuChange = (e, key) => {
        let { priceChecked } = this.state;
        const { checked } = e.target;
        if (checked) {
            priceChecked.push(key);
        } else {
            priceChecked = priceChecked.filter((pkey) => pkey !== key);
        }
        this.setState({ priceChecked })
    }

    onSortTypeChange = (e, type) => {
        this.setState({ sortType: type })
    }

    onCompositionTypeChange = ({ key }) => {
        this.setState({ compositionType: key })
        const item = {
            name: 'composition',
            label: key,
            value: key
        }
        this.onAddConditions(item)
    }

    onPersonaeNumberChange = (e, personaeNumber) => {
        const personaeNumberLabel = e.target.textContent;
        this.setState({ personaeNumber, personaeNumberLabel });
        const item = {
            name: 'number',
            label: personaeNumberLabel,
            value: personaeNumber
        }
        this.onAddConditions(item);
    }

    onPersonaeSexChange = (e, personaeSex) => {
        const personaeSexLabel = e.target.textContent;
        this.setState({ personaeSex, personaeSexLabel });
        const item = {
            name: 'sex',
            label: personaeSexLabel,
            value: personaeSex
        }
        this.onAddConditions(item);
    }

    onPersonaeAgeChange = (e, personaeAge) => {
        const personaeAgeLabel = e.target.textContent;
        this.setState({ personaeAge, personaeAgeLabel });
        const item = {
            name: 'age',
            label: personaeAgeLabel,
            value: personaeAge
        }
        this.onAddConditions(item);
    }

    onPersonaeRaceChange = (e, personaeRace) => {
        const personaeRaceLabel = e.target.textContent;
        this.setState({ personaeRace, personaeRaceLabel });
        const item = {
            name: 'race',
            label: personaeRaceLabel,
            value: personaeRace
        }
        this.onAddConditions(item);
    }

    onColorChange = (e, color) => {
        const colorLabel = e.target.getAttribute('data-color');
        this.setState({ color, colorLabel });
        const item = {
            name: 'color',
            label: colorLabel,
            value: color
        }
        this.onAddConditions(item);
    }

    onAddConditions = (item, isClose) => {
        const { conditionsArray } = this.state;
        const newArry = conditionsArray.filter((li) => {
            if (li && (li.name !== item.name)) {
                return true;
            }
            return false;
        });
        if (isClose !== true) {
            newArry.push(item);
        }
        this.setState({ conditionsArray: newArry });
        const conditions = {};
        if (newArry.length > 0) {
            newArry.forEach((li) => {
                conditions[li.name] = li.value
            })
        }
        this.props.onConditionsChange(conditions);
    }

    render() {
        const {
            picTypeName,
            sortType,
            compositionType,
            personaeNumber,
            personaeSex,
            personaeAge,
            personaeRace,
            color,
            conditionsArray } = this.state;
        const picTypeMenu = <Menu onClick={this.onPicTypeChange}>
            <Item key="all">全部图片</Item>
            <Item key="pic">照片</Item>
            <Item key="vect">矢量</Item>
            <Item key="video">视频</Item>
        </Menu>;
        const priceMenu = <Menu>
            <Item key="all">全部</Item>
            <Item key="ordinary">
                <Checkbox onChange={(e) => this.onPriceMenuChange(e, 'ordinary')}>普通</Checkbox>
            </Item>
            <Item key="eu" className="pl30">
                <Checkbox onChange={(e) => this.onPriceMenuChange(e, 'eu')}>OriginEU</Checkbox>
            </Item>
            <Item key="us" className="pl30">
                <Checkbox onChange={(e) => this.onPriceMenuChange(e, 'us')}>OriginUS</Checkbox>
            </Item>
            <Item key="core" className="pl30">
                <Checkbox onChange={(e) => this.onPriceMenuChange(e, 'core')}>OriginCore</Checkbox>
            </Item>
            <Item key="senior">
                <Checkbox onChange={(e) => this.onPriceMenuChange(e, 'senior')}>高级</Checkbox>
            </Item>
        </Menu>;

        const compositionMenu = <Menu onClick={this.onCompositionTypeChange} className="condition-composition-menu">
            <Item key="s" className={compositionType === 's' ? 'active' : ''}>
                <Icon type="drag" className="rotate-45" />
            </Item>
            <Item key="h" className={compositionType === 'h' ? 'active' : ''}>
                <Icon type="colum-height" />
            </Item>
            <Item key="v" className={compositionType === 'v' ? 'active' : ''}>
                <Icon type="colum-height" className="rotate-90" />
            </Item>
        </Menu>

        const personaeMenu = <Menu className="condition-personaecolor-menu">
            <Item>
                <div>
                    <span className="pr10">人数：</span>
                    <Button size="small"
                        className={personaeNumber === 0 ? 'active' : ''}
                        onClick={(e) => this.onPersonaeNumberChange(e, 0)}>
                        无人
                     </Button>
                    <Button size="small"
                        className={personaeNumber === 1 ? 'active' : ''}
                        onClick={(e) => this.onPersonaeNumberChange(e, 1)}>
                        1人
                    </Button>
                    <Button size="small"
                        className={personaeNumber === 2 ? 'active' : ''}
                        onClick={(e) => this.onPersonaeNumberChange(e, 2)}>
                        2人
                    </Button>
                    <Button size="small"
                        className={personaeNumber === 3 ? 'active' : ''}
                        onClick={(e) => this.onPersonaeNumberChange(e, 3)}>
                        3人
                    </Button>
                    <Button size="small"
                        className={personaeNumber === 4 ? 'active' : ''}
                        onClick={(e) => this.onPersonaeNumberChange(e, 4)}>
                        3人以上
                    </Button>
                </div>
                <div className="mt10">
                    <span className="pr10">性别：</span>
                    <Button size="small"
                        className={personaeSex === 0 ? 'active' : ''}
                        onClick={(e) => this.onPersonaeSexChange(e, 0)}>
                        男
                    </Button>
                    <Button size="small"
                        className={personaeSex === 1 ? 'active' : ''}
                        onClick={(e) => this.onPersonaeSexChange(e, 1)}>
                        女
                    </Button>
                </div>
                <div className="mt10 clearfix">
                    <div className="left">
                        <span className="pr10">年龄：</span>
                    </div>
                    <div className="left">
                        <div>
                            <Button size="small"
                                className={personaeAge === 0 ? 'active' : ''}
                                onClick={(e) => this.onPersonaeAgeChange(e, 0)}>
                                婴儿
                            </Button>
                            <Button size="small"
                                className={personaeAge === 1 ? 'active' : ''}
                                onClick={(e) => this.onPersonaeAgeChange(e, 1)}>
                                儿童
                            </Button>
                            <Button size="small"
                                className={personaeAge === 2 ? 'active' : ''}
                                onClick={(e) => this.onPersonaeAgeChange(e, 2)}>
                                少年
                            </Button>
                            <Button size="small"
                                className={personaeAge === 3 ? 'active' : ''}
                                onClick={(e) => this.onPersonaeAgeChange(e, 3)}>
                                20-29
                            </Button>
                        </div>
                        <div className="mt10">
                            <Button size="small"
                                className={personaeAge === 4 ? 'active' : ''}
                                onClick={(e) => this.onPersonaeAgeChange(e, 4)}>
                                30-39
                            </Button>
                            <Button size="small"
                                className={personaeAge === 5 ? 'active' : ''}
                                onClick={(e) => this.onPersonaeAgeChange(e, 5)}>
                                40-49
                            </Button>
                            <Button size="small"
                                className={personaeAge === 6 ? 'active' : ''}
                                onClick={(e) => this.onPersonaeAgeChange(e, 6)}>
                                50-59
                            </Button>
                            <Button size="small"
                                className={personaeAge === 7 ? 'active' : ''}
                                onClick={(e) => this.onPersonaeAgeChange(e, 7)}>
                                60-69
                            </Button>
                        </div>
                        <div className="mt10">
                            <Button size="small"
                                className={personaeAge === 8 ? 'active' : ''}
                                onClick={(e) => this.onPersonaeAgeChange(e, 8)}>
                                70-
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="mt10 clearfix">
                    <div className="left">
                        <span className="pr10">人种：</span>
                    </div>
                    <div className="left">
                        <div>
                            <Button size="small"
                                className={personaeRace === 0 ? 'active' : ''}
                                onClick={(e) => this.onPersonaeRaceChange(e, 0)}>
                                亚洲
                            </Button>
                            <Button size="small"
                                className={personaeRace === 1 ? 'active' : ''}
                                onClick={(e) => this.onPersonaeRaceChange(e, 1)}>
                                巴西
                            </Button>
                            <Button size="small"
                                className={personaeRace === 2 ? 'active' : ''}
                                onClick={(e) => this.onPersonaeRaceChange(e, 2)}>
                                中东
                            </Button>
                            <Button size="small"
                                className={personaeRace === 3 ? 'active' : ''}
                                onClick={(e) => this.onPersonaeRaceChange(e, 3)}>
                                欧洲
                            </Button>
                        </div>
                        <div className="mt10">
                            <Button size="small"
                                className={personaeRace === 4 ? 'active' : ''}
                                onClick={(e) => this.onPersonaeRaceChange(e, 4)}>
                                澳大利亚
                            </Button>
                            <Button size="small"
                                className={personaeRace === 5 ? 'active' : ''}
                                onClick={(e) => this.onPersonaeRaceChange(e, 5)}>
                                拉丁美洲
                            </Button>
                            <Button size="small"
                                className={personaeRace === 6 ? 'active' : ''}
                                onClick={(e) => this.onPersonaeRaceChange(e, 6)}>
                                北美
                            </Button>
                        </div>
                        <div className="mt10">
                            <Button size="small"
                                className={personaeRace === 7 ? 'active' : ''}
                                onClick={(e) => this.onPersonaeRaceChange(e, 7)}>
                                非洲
                            </Button>
                        </div>
                    </div>
                </div>
            </Item>
        </Menu>

        const colorMenu = <Menu className="condition-personaecolor-menu">
            <Item className="color-menu-item">
                <div>
                    <Button
                        className={color === 2 ? 'active' : ''}
                        onClick={(e) => this.onColorChange(e, 2)}
                        data-color="00007c"
                        style={{ backgroundColor: '#00007c' }}
                    ></Button>
                    <Button
                        className={color === 3 ? 'active' : ''}
                        onClick={(e) => this.onColorChange(e, 3)}
                        data-color="0005fd"
                        style={{ backgroundColor: '#0005fd' }}></Button>
                    <Button
                        className={color === 4 ? 'active' : ''}
                        onClick={(e) => this.onColorChange(e, 4)}
                        data-color="01ffff"
                        style={{ backgroundColor: '#01ffff' }}></Button>
                    <Button
                        className={color === 5 ? 'active' : ''}
                        onClick={(e) => this.onColorChange(e, 5)}
                        data-color="027f00"
                        style={{ backgroundColor: '#027f00' }}></Button>
                    <Button
                        className={color === 6 ? 'active' : ''}
                        onClick={(e) => this.onColorChange(e, 6)}
                        data-color="04fe00"
                        style={{ backgroundColor: '#04fe00' }}></Button>
                </div>
                <div className="mt3">
                    <Button
                        className={color === 7 ? 'active' : ''}
                        onClick={(e) => this.onColorChange(e, 7)}
                        data-color="fff000"
                        style={{ backgroundColor: '#fff000' }}></Button>
                    <Button
                        className={color === 8 ? 'active' : ''}
                        onClick={(e) => this.onColorChange(e, 8)}
                        data-color="f9be00"
                        style={{ backgroundColor: '#f9be00' }}></Button>
                    <Button
                        className={color === 9 ? 'active' : ''}
                        onClick={(e) => this.onColorChange(e, 9)}
                        data-color="fecd9b"
                        style={{ backgroundColor: '#fecd9b' }}></Button>
                    <Button
                        className={color === 10 ? 'active' : ''}
                        onClick={(e) => this.onColorChange(e, 10)}
                        data-color="fe0000"
                        style={{ backgroundColor: '#fe0000' }}></Button>
                    <Button
                        className={color === 11 ? 'active' : ''}
                        onClick={(e) => this.onColorChange(e, 11)}
                        data-color="7e0004"
                        style={{ backgroundColor: '#7e0004' }}></Button>
                </div>
                <div className="mt3">
                    <Button
                        className={color === 12 ? 'active' : ''}
                        onClick={(e) => this.onColorChange(e, 12)}
                        data-color="653201"
                        style={{ backgroundColor: '#653201' }}></Button>
                    <Button
                        className={color === 13 ? 'active' : ''}
                        onClick={(e) => this.onColorChange(e, 13)}
                        data-color="ff01ff"
                        style={{ backgroundColor: '#ff01ff' }}></Button>
                    <Button
                        className={color === 14 ? 'active' : ''}
                        onClick={(e) => this.onColorChange(e, 14)}
                        data-color="810081"
                        style={{ backgroundColor: '#810081' }}></Button>
                    <Button
                        className={color === 15 ? 'active' : ''}
                        onClick={(e) => this.onColorChange(e, 15)}
                        data-color="bfbfbf"
                        style={{ backgroundColor: '#bfbfbf' }}></Button>
                    <Button
                        className={color === 16 ? 'active' : ''}
                        onClick={(e) => this.onColorChange(e, 16)}
                        data-color="7a7a7a"
                        style={{ backgroundColor: '#7a7a7a' }}></Button>
                </div>
                <div className="mt3">
                    <Button
                        className={color === 0 ? 'active' : ''}
                        onClick={(e) => this.onColorChange(e, 0)}
                        data-color="fff"
                        style={{ backgroundColor: '#fff' }}></Button>
                    <Button
                        className={color === 1 ? 'active' : ''}
                        onClick={(e) => this.onColorChange(e, 1)}
                        data-color="000"
                        style={{ backgroundColor: '#000' }}></Button>
                </div>
            </Item>
        </Menu>

        const conditionsBox = conditionsArray.length > 0 ? (
            conditionsArray.map((li, index) => {
                let label = li.label;
                if (li.name === 'color') {
                    label = <div className="left mr5"
                        style={{ width: '16px', height: '16px', backgroundColor: '#' + label }}>
                    </div>
                } else if (li.name === 'composition') {

                    if (li.label === 's') {
                        label = <Icon style={{ color: '#f39700' }} type="drag" className="rotate-45 mr10" />
                    }
                    else if (li.label === 'h') {
                        label = <Icon style={{ color: '#f39700' }} type="colum-height" className=" mr10" />
                    }
                    else if (li.label === 'v') {
                        label = <Icon style={{ color: '#f39700' }} type="colum-height" className="rotate-90  mr10" />
                    }
                }
                return <Button
                    key={li.name + index}
                    className="mr10"
                    size="small"
                    onClick={() => this.onAddConditions(li, true)}
                    style={{ fontSize: '12px' }}>
                    {label}
                    <Icon className="pointer" type="close" ></Icon>
                </Button>
            })
        ) : '无';
        return (
            <div className="condition-filter-box">
                <div>

                    <Dropdown className="condition-button" overlay={picTypeMenu}>
                        <Button>
                            <span style={{ width: '60px' }}>
                                {picTypeName}
                            </span>
                            <Icon type="down" />
                        </Button>
                    </Dropdown>
                    <Dropdown className="condition-button" overlay={priceMenu}>
                        <Button>
                            <span style={{ width: '60px' }}>价格筛选</span>
                            <Icon type="down" />
                        </Button>
                    </Dropdown>
                    <Button
                        className={"condition-button sort-btn " + (sortType === 'hot' ? 'active' : '')}
                        onClick={(e) => this.onSortTypeChange(e, 'hot')}>
                        <span style={{ width: '60px' }}>热度</span>
                        <Icon type="sort-descending" />
                    </Button>
                    <Button
                        className={"condition-button sort-btn " + (sortType === 'match' ? 'active' : '')}
                        onClick={(e) => this.onSortTypeChange(e, 'match')}>
                        <span style={{ width: '60px' }}>匹配</span>
                        <Icon type="sort-descending" />
                    </Button>
                    <Button
                        className={"condition-button sort-btn " + (sortType === 'new' ? 'active' : '')}
                        onClick={(e) => this.onSortTypeChange(e, 'new')}>
                        <span style={{ width: '60px' }}>最新</span>
                        <Icon type="sort-descending" />
                    </Button>
                    <Dropdown className="condition-button" overlay={compositionMenu}>
                        <Button>
                            <span style={{ width: '60px' }}>构图</span>
                            <Icon type="down" />
                        </Button>
                    </Dropdown>
                    <Dropdown className="condition-button" overlay={personaeMenu}>
                        <Button>
                            <span style={{ width: '60px' }}>人物</span>
                            <Icon type="down" />
                        </Button>
                    </Dropdown>
                    <Dropdown className="condition-button" overlay={colorMenu}>
                        <Button>
                            <span style={{ width: '60px' }}>颜色</span>
                            <Icon type="down" />
                        </Button>
                    </Dropdown>
                </div>
                <div className="mt10 pl3 clearfix">
                    <div className="left" style={{ lineHeight: '24px' }}>筛选条件： </div>
                    <div className="left clearfix" style={{ lineHeight: '24px' }}>
                        {conditionsBox}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({ ...state.picListStore });

const mapDispatchToProps = dispatch => ({
    onConditionsChange: (value) => {
        dispatch({ type: 'pic-list-conditions', value });
        getPicList({ dispatch, params: value });
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(ConditionFilterBox);