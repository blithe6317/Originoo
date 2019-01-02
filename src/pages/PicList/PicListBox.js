import React, { Component } from 'react';
import { Table } from 'antd';

class PicListBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: {}
        };
    }

    onRowClick = (record) => {
        this.setState({ selected: record })
    }
    render() {
        const data = [{
            name: '张三',
            key: 1,
            sex: '男',
            phone: '158545555555',
            desc: '这个人很懒，什么都没有留'
        }, {
            name: '李四',
            key: 2,
            sex: '男',
            phone: '15854444444',
            desc: '这个人很懒，什么都没有留'
        }, {
            name: '王五',
            key: 3,
            sex: '男',
            phone: '1585466666555',
            desc: '这个人很懒，什么都没有留'
        }, {
            name: '赵六',
            key: 4,
            sex: '女',
            phone: '158545777755',
            desc: '这个人很懒，什么都没有留'
        }];
        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: '性别',
            dataIndex: 'sex',
            key: 'sex'
        }, {
            title: '手机号',
            dataIndex: 'phone',
            key: 'phone'
        }, {
            title: '签名',
            dataIndex: 'desc',
            key: 'desc'
        }];


        return (
            <Table
                dataSource={data}
                columns={columns}
                rowClassName={(record) => (record.key === this.state.selected.key ? 'selected' : '')}
                onRow={(record) => ({
                    onClick: () => {
                        this.onRowClick(record)
                    }
                })} />
        );
    }
}

export default PicListBox;