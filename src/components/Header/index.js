import React from 'react';
import { Layout } from 'antd';
import HeaderDropDown from './HeaderDropDown';
import Logo from '../Logo';
import HeaderUserInfo from './HeaderUserInfo';


import './index.scss'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const menu1 = {
            title: '免费',
            href: '#'
        };
        const menu2 = {
            title: '素材',
            href: '#',
            children: [{
                title: '照片',
                children: [{
                    title: '精选图集'
                }, {
                    title: '元旦'
                }, {
                    title: '春节'
                }, {
                    title: '圣诞'
                }, {
                    title: '情人节'
                }, {
                    title: '中秋'
                }, {
                    title: '国庆'
                }, {
                    title: '春'
                }, {
                    title: '夏'
                }, {
                    title: '秋'
                }, {
                    title: '冬'
                }, {
                    title: '中式美食'
                }, {
                    title: '西餐美食'
                }, {
                    title: '食物原料'
                }, {
                    title: '饮料酒水'
                }, {
                    title: '蔬菜'
                }, {
                    title: '餐具厨具'
                }, {
                    title: '烹饪'
                }, {
                    title: '日常生活'
                }, {
                    title: '职场人物'
                }, {
                    title: '商务团队'
                }, {
                    title: '儿童幼儿'
                }, {
                    title: '老年人物'
                }, {
                    title: '男性男人'
                }, {
                    title: '女性女人'
                }, {
                    title: '人体元素'
                }]
            }, {
                title: '矢量',
                children: [{
                    title: '精选矢量'
                }, {
                    title: '卡通字体'
                }, {
                    title: '英文字体'
                }, {
                    title: '广告字体'
                }, {
                    title: '卡通字体'
                }, {
                    title: '创意字体'
                }, {
                    title: '艺术字体'
                }, {
                    title: '中国风'
                }, {
                    title: '边框'
                }, {
                    title: '海报背景'
                }, {
                    title: '广告背景'
                }, {
                    title: 'H5'
                }, {
                    title: '地图'
                }, {
                    title: '界面设计'
                }, {
                    title: '底纹'
                }, {
                    title: 'logo'
                }]
            }, {
                title: '视频'
            }]
        };
        const point = {
            color: 'red',
            text: 'new'
        };
        const point2 = {
            color: 'red',
            text: '88折'
        };
        const menu3 = {
            title: '云摄影',
            href: '#'
        };
        const menu4 = {
            title: '企业版',
            href: '#'
        };
        const menu5 = {
            title: '价格',
            href: '#'
        };
        const menu6 = {
            title: '供图',
            href: '#',
            children: [{
                title: '立即签约'
            }, {
                title: '最新活动'
            }]
        };
        return (
            <Layout.Header className="header clearfix">

                <Logo />

                <HeaderDropDown point={point} menu={menu1} type="first" />
                <HeaderDropDown menu={menu2} />
                <HeaderDropDown menu={menu3} />
                <HeaderDropDown menu={menu4} />
                <HeaderDropDown point={point2} menu={menu5} />
                <HeaderDropDown menu={menu6} />
                <HeaderUserInfo />
            </Layout.Header>
        )
    }
}

export default Header;