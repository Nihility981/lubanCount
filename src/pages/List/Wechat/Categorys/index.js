import React, { PureComponent } from 'react';
import { Table, Tag, message, Modal, Popconfirm } from 'antd';
import { getCategorys, delCategory } from '@/services/list';

/** 账号登录/手机号登录 */
class Categorys extends PureComponent {
    /** table标题 */
    columns = [
        { title: '名称', align: 'center', dataIndex: 'name' },
        { title: '备注', align: 'center', dataIndex: 'remark' },
        {
            title: '操作',
            key: 'action',
            align: 'center',
            width: 190,
            render: (text, record, index) => (
                <Popconfirm
                    title="确认删除?"
                    okText="确认"
                    cancelText="取消"
                    onConfirm={async () => {
                        const { code = 0, err = '' } = await delCategory({ name: record.name });
                        if (code == 1) {
                            // eslint-disable-next-line no-shadow
                            const { categorys } = this.state;
                            categorys.splice(index, 1);
                            this.setState((state) => {
                                delete state.categorys;
                                return state;
                            });
                            this.setState({ categorys });
                            return message.success('删除成功');
                        }
                        return message.warning(err);
                    }}
                >
                    <Tag color="#f50">删除</Tag>
                </Popconfirm>
            ),
        },
    ]

    /** 构造器 */
    constructor(props) {
        super(props);
        this.state = { categorys: [] };
    }

    /** 展示类表 */
    showCategorys = () => {
        getCategorys().then((response) => {
            const { data = [] } = response;
            this.setState({ visible: true, categorys: data });
        });
    }

    /** 组件挂载 */
    render() {
        const { categorys, visible = false } = this.state;
        return (
            <Modal
                title="管理分组"
                footer={false}
                visible={visible}
                onCancel={() => this.setState({ visible: false })}
            >
                <Table
                    columns={this.columns}
                    dataSource={categorys}
                    rowKey={row => row.name}
                    pagination={false}
                />
            </Modal>
        );
    }
}


export default Categorys;
