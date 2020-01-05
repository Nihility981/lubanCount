import React, { PureComponent } from 'react';
import { Button, Table, Select, Card, Form, Input, Tag, message, Modal, Descriptions, Divider } from 'antd';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import moment from 'moment';
import { runTimeFormat, isEmpty, copy, emptyOrBlank } from '@/utils/common';
import { getShareUrl, delOffline, getFansCount, addCategory, getCategorys, enterCategoryService, setTag, deleteWx } from '@/services/list';

import Categorys from './Categorys';

const { Option } = Select;
const { Search } = Input;
const { success, confirm } = Modal;

/** 连接dva */
@connect(({
    list: { list = [] } = {},
    loading,
}) => ({
    list,
    loading: loading.models.list,
}))
/** 账号登录/手机号登录 */
class Wechat extends PureComponent {
    /** table标题 */
    columns = [
        { title: '编号', align: 'center', dataIndex: 'wechatid', width: 200 },
        { title: '分组', align: 'center', dataIndex: 'group', width: 100 },
        { title: '微信昵称', align: 'center', dataIndex: 'nickname', width: 100 },
        { title: '备注', align: 'center', dataIndex: 'remark', width: 200 },
        { title: '标注', align: 'center', dataIndex: 'tag', width: 80 },
        { title: '已加粉', align: 'center', dataIndex: 'fans_count', width: 80 },
        { title: '设备', align: 'center', dataIndex: 'device', width: 80},
        {
            title: '上线时间',
            align: 'center',
            width: 180,
            dataIndex: 'login_time',
            render: (text) => {
                if (text > 0) return moment(text).format('YYYY-MM-DD HH:mm:ss');
                return '-';
            },
        },
        {
            title: '已运行',
            align: 'center',
            dataIndex: 'run_time',
            width: 130,
            render: (text, record) => {
                if (!isEmpty(text)) {
                    if (record.state == 0) return runTimeFormat(record.logout_time - record.login_time);
                    return runTimeFormat(new Date() - record.login_time);
                }
                return runTimeFormat(text);
            },
        },
        { title: '离线时间', dataIndex: 'logout_time', align: 'center', render: text => (text > 0 ? moment(text).format('YYYY-MM-DD HH:mm:ss') : '-') },
        {
            title: '状态',
            dataIndex: 'state',
            render: (text) => {
                const { states } = this.state;
                return states[text] && <Tag color={states[text].color}>{states[text].name}</Tag>;
            },
        },
        {
            title: '操作',
            key: 'action',
            align: 'center',
            width: 190,
            render: (text, record) => (
                <>
                    <Button icon="star" type="link" size="small" onClick={() => this.setTag(record.wxid, record.tag)}>标注</Button>
                    <Divider type="vertical" />
                    <Button icon="delete" type="link" size="small" onClick={() => this.deleteWx(record.wxid)}>删除</Button>
                </>
            ),
        },
    ]

    /** 构造器 */
    constructor(props) {
        super(props);
        this.state = {
            states: [
                { name: '离线', color: '#999' },
                { name: '在线', color: '#87d068' },
            ],
        };
        if (!window.initList) window.initList = setInterval(() => this.onLoad(), 6000);
        this.onLoad();
    }

    /** 数据加载 */
    onLoad = async () => {
        const { dispatch } = this.props;
        const { searchKey = '', state = '' } = this.state;
        await dispatch({ type: 'list/getList', payload: { searchKey, state } });
    }

    /** 获取分享链接 */
    getShareUrl = async () => {
        const { code = 0, url = '' } = await getShareUrl();
        /** 复制 */
        if (code == 1) copy(url);
    }

    /** 删除离线账号 */
    delOffline = async () => {
        const { selected = [] } = this.state;
        const { code = 0, err = '' } = await delOffline({ ids: selected });
        if (code == 1) {
            message.success('删除成功');
            return setTimeout(() => this.onLoad(), 1000);
        }
        return message.error(err);
    }

    /** 统计粉丝数量 */
    getFansCount = async () => {
        const { selected = [] } = this.state;
        const response = await getFansCount({ ids: selected });
        const { code = 0, err = '' } = response;
        const fansTotal = emptyOrBlank(response, 'total_fans', 0);
        const wxTotal = emptyOrBlank(response, 'total_wxid', 0);
        if (code == 1) {
            return success({
                title: '统计粉丝数量',
                content: (
                    <Descriptions>
                        <Descriptions.Item label="共统计微信" span={1}>{wxTotal}</Descriptions.Item>
                        <Descriptions.Item label="共累计加粉" span={1}>{fansTotal}</Descriptions.Item>
                    </Descriptions>
                ),
            });
        }
        return message.error(err);
    }

    /** 创建分组 */
    addCategory = () => {
        confirm({
            title: '创建分组',
            okText: '确认',
            cancelText: '取消',
            maskClosable: true,
            content: (
                <Form layout="inline">
                    <Form.Item label="分组名称">
                        <Input onChange={e => this.setState({ addCateName: e.target.value })} />
                    </Form.Item>
                    <Form.Item label="分组备注">
                        <Input onChange={e => this.setState({ addCateRemark: e.target.value })} />
                    </Form.Item>
                </Form>
            ),
            onOk: async () => {
                const { addCateName = '', addCateRemark = '' } = this.state;
                if (isEmpty(addCateName)) {
                    message.warning('分组名称不能为空');
                    return true;
                }
                const { code = 0, err = '' } = await addCategory({ addCateName, addCateRemark });
                if (code == 1) {
                    message.success('创建成功');
                    return true;
                }
                message.error(err);
                return true;
            },
        });
    }

    /** 加入分组 */
    enterCategory = async () => {
        const { selected = [] } = this.state;
        if (isEmpty(selected)) return message.warning('请先勾选用户');
        const { data = [] } = await getCategorys();
        if (isEmpty(data)) return message.warning('请创建分组');
        return confirm({
            title: '选择加入的分组',
            okText: '确认',
            cancelText: '取消',
            content: (
                <Select
                    style={{ marginTop: 20, width: 220 }}
                    placeholder="请选择"
                    onChange={val => this.setState({ enterCategory: val })}
                >
                    { data && data.map(item => <Option value={item.name} key={item.name}>{item.name}</Option>) }
                </Select>
            ),
            onOk: async () => {
                const { enterCategory } = this.state;
                const { code = 0, err = '' } = await enterCategoryService({ name: enterCategory, ids: selected });
                if (code == 1) {
                    message.success('加入成功');
                    return setTimeout(() => this.onLoad(), 1000);
                }
                return message.warning(err);
            },
        });
    }

    /** 编辑标注 */
    setTag = (id = 0, name = '') => {
        confirm({
            title: '编辑用户信息',
            okText: '确认',
            cancelText: '取消',
            maskClosable: true,
            content: (
                <Form layout="inline">
                    <Form.Item label="标注">
                        <Input defaultValue={name} onChange={e => this.setState({ tagName: e.target.value })} />
                    </Form.Item>
                </Form>
            ),
            onOk: async () => {
                const { tagName = '' } = this.state;
                const { code = 0, err = '' } = await setTag({ id, name: tagName });
                if (code == 1) {
                    message.success('编辑成功');
                    return setTimeout(() => this.onLoad(), 1000);
                }
                message.error(err);
                return true;
            },
        });
    }

    /**删除微信 */
    deleteWx = (id=0) => {
        confirm({
            title: '确认删除该微信数据吗？',
            okText: '确认',
            cancelText: '取消',
            maskClosable: true,
            onOk: async () => {
                const { code = 0, err = '' } = await deleteWx({ id: id });
                if (code == 1) {
                    message.success('删除成功');
                    return setTimeout(() => this.onLoad(), 1000);
                }
                return message.error(err);
            }
        })
    }

    /** 组件挂载 */
    render() {
        const { list = [], loading } = this.props;
        const { selected } = this.state;
        return (
            <Card>
                <Categorys ref={(c) => { this.category = c; }} />
                <Form layout="inline" style={{ marginBottom: 20 }}>
                    <Form.Item>
                        <Search
                            placeholder="微信昵称/备注"
                            onChange={e => this.setState({ searchKey: e.target.value })}
                            onSearch={this.onLoad}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Select placeholder="状态" onChange={val => this.setState({ state: val }, this.onLoad)} style={{ minWidth: 120 }}>
                            <Option value="">全部</Option>
                            <Option value="1">在线</Option>
                            <Option value="0">离线</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item><Button type="danger" icon="share-alt" onClick={this.getShareUrl}>分享</Button></Form.Item>
                    <Form.Item><Button type="danger" icon="delete" onClick={this.delOffline}>删除离线账号</Button></Form.Item>
                    <Form.Item><Button type="primary" icon="line-chart" onClick={this.getFansCount}>统计粉丝数量</Button></Form.Item>
                </Form>
                <Form layout="inline" style={{ marginBottom: 20 }}>
                    <Form.Item><Button type="default" icon="plus" onClick={this.addCategory}>创建分组</Button></Form.Item>
                    <Form.Item><Button type="danger" icon="bars" onClick={() => this.category.showCategorys()}>管理分组</Button></Form.Item>
                    <Form.Item><Button type="primary" icon="enter" onClick={this.enterCategory}>加入分组</Button></Form.Item>
                </Form>
                <Table
                    columns={this.columns}
                    loading={loading}
                    dataSource={list}
                    rowKey={row => row.wxid}
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

Wechat.defaultProps = {
    dispatch: null,
    loading: false,
    list: [],
};
Wechat.propTypes = {
    dispatch: PropTypes.any,
    loading: PropTypes.any,
    list: PropTypes.any,
};

export default Form.create({ name: 'wechatList' })(Wechat);
