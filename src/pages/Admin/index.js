import React, { PureComponent } from 'react';
import { Button, Table, Select, Card, Form, Input, Tag, message, Modal, Typography, DatePicker } from 'antd';
import { connect } from 'dva';
import moment from 'moment';
import { isEmpty } from '@/utils/common';
import { getUsers, setUser, setAnnouncement } from '@/services/admin';
//import { getLoginSuccessContent } from '@/services/global'

moment.locale('zh-cn');

const { Option } = Select;
const { Search } = Input;
const { confirm } = Modal;
const { Paragraph } = Typography;

/** 连接dva */
@connect(({
    list: { list = [] } = {},
    loading,
}) => ({
    list,
    loading: loading.models.list,
}))
/** 账号登录/手机号登录 */
class Admin extends PureComponent {
    /** table标题 */
    columns = [
        { title: '账号', align: 'center', dataIndex: 'account' },
        { title: '手机号', align: 'center', dataIndex: 'phone_num' },
        { title: '创建时间', align: 'center', dataIndex: 'create_time', render: text => moment(text).format('YYYY-MM-DD HH:mm:ss') },
        { title: '到期时间', align: 'center', dataIndex: 'deadline', render: text => moment(text).format('YYYY-MM-DD HH:mm:ss') },
        { title: '微信数量', align: 'center', dataIndex: 'wx_count'},
        {
            title: '状态',
            align: 'center',
            dataIndex: 'state',
            render: (text) => {
                const { states = [] } = this.state;
                return states[text] && <Tag color={states[text].color}>{states[text].name}</Tag>;
            },
        },
        { title: '分享链接', align: 'center', dataIndex: 'share_url', render: text => <Paragraph copyable>{text}</Paragraph> },
    ]

    /** 构造器 */
    constructor(props) {
        super(props);
        this.state = {
            states: [
                { value: 0, name: '重置', color: '#999' },
                { value: 1, name: '正常', color: '#87d068' },
                { value: 2, name: '冻结', color: '#f50' },
                { value: 3, name: '到期', color: '#999' },
            ],
            list: [],
            loading: false,
            deadline: 0,
            state: -1,
            wx_limit: -1,
            announcement: "",
        };
        this.onLoad();
    }

    /** 数据加载 */
    onLoad = async () => {
        await this.setState({ loading: true });
        const { searchKey = '', state = '' } = this.state;
        const { code = 0, data = [], err = '' } = await getUsers({ searchKey, state });
        if (code == 1) {
            this.setState({ list: data, loading: false });
        } else if (err) message.warning(err);
        //const { code2 = 0, send = 0, content = '' } = setTimeout(() => getLoginSuccessContent(), 1000);
        //if (code2 == 1 && send == 1) {
        //    this.setState({ announcement: content})
        //}
    }

    /** 更新用户数据 */
    setUser = () => {
        const { states = [], selected = [] } = this.state;
        if (isEmpty(selected)) return message.warning('请先勾选用户');
        return confirm({
            title: '编辑用户信息',
            okText: '确认',
            cancelText: '取消',
            maskClosable: true,
            content: (
                <Form layout="inline">
                    <Form.Item label="用户状态">
                        <Select
                            style={{ width: 195 }}
                            placeholder="请选择"
                            onChange={val => this.setState({ state: val })}
                        >
                            { states && states.map(item => <Option value={item.value} key={item.value}>{item.name}</Option>) }
                        </Select>
                    </Form.Item>
                    <Form.Item label="到期时间">
                        <DatePicker
                            style={{ width: 195 }}
                            placeholder="选择日期"
                            format="YYYY-MM-DD HH:mm:ss"
                            showTime={{
                                format: 'YYYY-MM-DD HH:mm:ss',
                                placeholder: '选择时间',
                            }}
                            onChange={val => this.setState({ deadline: val.valueOf() })}
                        />
                    </Form.Item>
                    <Form.Item label="微信上限">
                        <Input style={{ width: 195 }} onChange={e => this.setState({ wx_limit: e.target.value })}/>
                    </Form.Item>
                </Form>
            ),
            onOk: async () => {
                const { deadline = 0, state = 0, wx_limit = 0 } = this.state;
                const { code = 0, err = '' } = await setUser({ ids: selected, state, deadline, wx_limit });
                if (code == 1) {
                    message.success('编辑成功');
                    return setTimeout(() => this.onLoad(), 1000);
                }
                message.error(err);
                return true;
            },
        });
    }

    setAnnouncement = () => {
        return confirm({
            title: '发布公告',
            okText: '确认',
            cancelText: '取消',
            maskClosable: true,
            content: (
                <Form layout="inline">
                    <textarea style={{ width: 295 }} class="ant-input" rows="4" onChange={e => this.setState({ announcement: e.target.value })}/>
                </Form>
            ),
            onOk: async () => {
                const { announcement="" } = this.state;
                const { code = 0, err = '' } = await setAnnouncement(announcement);
                if (code == 1) {
                    message.success('发布成功');
                    return setTimeout(() => this.onLoad(), 1000);
                }
                message.error(err);
                return true;
            }
        });
    }

    /** 组件挂载 */
    render() {
        const { list = [], selected, loading = false } = this.state;
        return (
            <Card>
                <Form layout="inline" style={{ marginBottom: 20 }}>
                    <Form.Item>
                        <Search
                            placeholder="账号/手机号"
                            onChange={e => this.setState({ searchKey: e.target.value })}
                            onSearch={this.onLoad}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Select placeholder="状态" onChange={val => this.setState({ state: val }, this.onLoad)} style={{ minWidth: 120 }}>
                            <Option value="">全部</Option>
                            <Option value="1">正常</Option>
                            <Option value="2">冻结</Option>
                            <Option value="3">到期</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={this.setUser}>批量编辑</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={this.setAnnouncement}>发布公告</Button>
                    </Form.Item>
                </Form>
                <Table
                    columns={this.columns}
                    loading={loading}
                    dataSource={list}
                    rowKey={row => row.account}
                    rowSelection={{
                        selected,
                        onChange: val => this.setState({ selected: val }),
                    }}
                    pagination={{
                        pageSize: 10,
                        defaultCurrent: 1,
                        total: Number(list.length),
                        showTotal: () => `共 ${list.length} 条`,
                        size: 'small',
                    }}
                    showQuickJumper
                    size="small"
                />
            </Card>
        );
    }
}

export default Admin;
