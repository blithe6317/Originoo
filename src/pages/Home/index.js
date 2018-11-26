import React from 'react';
import Swiper from 'react-id-swiper';
import { Button } from 'antd';

import SkipModuleBox from './SkipModuleBox';

import './index.scss'
import '../../assets/css/swiper.min.css'

class Home extends React.Component {

    render() {
        const swipers = [{
            img: 'http://originoo-1.b0.upaiyun.com//sys/2018/08/31/p_58n10mt5gjy49qooon2tip03cygsrklc.JPG!originoo'
        }, {
            img: 'http://originoo-1.b0.upaiyun.com//sys/2018/10/30/p_g83wvi5yyjn4cqw71ysgpyooymsde7sd.jpg!originoo'
        }, {
            img: 'http://originoo-1.b0.upaiyun.com//sys/2018/10/19/p_zmobycgbg0el35q1eqjyv3h2yyfacg73.jpg!originoo'
        }, {
            img: 'http://originoo-1.b0.upaiyun.com//sys/2018/07/17/p_dqwkyjjg1svn09nd01tm2cmeunn2216h.jpg!originoo'
        }, {
            img: 'http://originoo-1.b0.upaiyun.com//sys/2018/08/31/p_58n10mt5gjy49qooon2tip03cygsrklc.JPG!originoo'
        }];
        const params = {
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        }
        const skips = [{
            img: 'http://originoo-1.b0.upaiyun.com//sys/2018/01/11/p_idw1v85m8jdqkew2wnblg87g77t5usgy.jpg!originoo',
            text: '免费图库',
            btn: '查看详情',
            href: ''
        }, {
            img: 'http://originoo-1.b0.upaiyun.com//sys/2018/01/11/p_usn2yb6azy9j8py56mcjtciu315cj9es.jpg!originoo',
            text: '买图先选套餐',
            btn: '查看详情',
            href: ''
        }, {
            img: 'http://originoo-1.b0.upaiyun.com//sys/2018/01/11/p_5ft8dzb41k2mhjl5i7romd67zdfhgyob.jpg!originoo',
            text: '中国人像合集',
            btn: '查看详情',
            href: ''
        }, {
            img: 'http://originoo-1.b0.upaiyun.com//sys/2018/01/11/p_6sir8tb70nopiss47se7s1rvxrrdeg3q.jpg!originoo',
            text: '摄影活动专区',
            btn: '查看详情',
            href: ''
        }, {
            img: 'http://originoo-1.b0.upaiyun.com//sys/2018/01/11/p_i8vlfqsfh5blnfcpjxao95hy3hsnrhqd.jpg!originoo',
            text: '我要卖图片',
            btn: '查看详情',
            href: ''
        }];
        return (
            <div className="home-content">
                <Swiper className="swiper-container-box" {...params}>
                    {
                        swipers.map((swiper, index) => (
                            <div key={index}
                                style={{ backgroundImage: `url(${swiper.img})` }}>
                            </div>
                        ))
                    }
                </Swiper>
                <p className="text-online">
                    目前在线
                    <span className="number">164,450,914</span>
                    张图片，昨日新增
                    <span className="number">33,414</span>
                    张
                    <Button className="clear-btn" style={{ color: '#ffa40d' }}>立即购买 >></Button>
                </p>
                <SkipModuleBox skips={skips} />
            </div>
        )
    }
}

export default Home;