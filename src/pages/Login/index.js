import React, { PureComponent } from 'react';
import { Button, Icon, Descriptions } from 'antd';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import router from 'umi/router';
import Login from '@/components/Login';

const { Tab, Password, UserName, Submit } = Login;
/** 连接dva */
@connect()
/** 账号登录/手机号登录 */
class IndexLogin extends PureComponent {
    /** 进行登录 */
    onSubmit = (err, values) => {
        if (!err) {
            const { dispatch } = this.props;
            const { name, password } = values;
            dispatch({
                type: 'login/login',
                payload: { name, password },
                callBack: () => {
                    router.push('/home');
                    document.write('');
                    setTimeout(() => window.location.reload(), 500);
                },
            });
        }
    };

    /** 组件挂载 */
    render() {
        return (
            <Login
                defaultActiveKey="passwordLogin"
                onTabChange={() => {}}
                onSubmit={this.onSubmit}
            >
                <Tab key="passwordLogin" tab="微信计数器">
                    <UserName
                        name="name"
                        placeholder="账户"
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        rules={[{ required: true, message: '请输入用户名' }]}
                    />
                    <Password name="password" placeholder="密码" />
                </Tab>
                <Submit>登录</Submit>
                <div style={{ textAlign: 'right' }}>
                    {'没有账号？'}
                    <Button type="link" onClick={() => router.push('/login/register')}>立即注册</Button>
                    <Button
                        type="link"
                        onClick={() => window.open('http://www.51xiaokeai.com/download/鲁班计数器.zip')}
                    >
                        软件下载
                    </Button>
                    <Button type="link" href="./wechatCountUserGuide.pdf" target="_blank">使用说明</Button>
                </div>
                <Descriptions size="small" column={2} style={{ textAlign: 'right' }}>
                    <Descriptions.Item label="客服QQ">
                        <Button type="link" style={{ padding: '0 5px' }}>1194880460</Button>
                    </Descriptions.Item>
                    <Descriptions.Item label="客服微信">
                        <Button type="link" style={{ paddingLeft: 5 }}>sbws980</Button>
                    </Descriptions.Item>
                    {/* <Descriptions.Item label="">

                    </Descriptions.Item> */}
                </Descriptions>
            </Login>
        );
    }
}

IndexLogin.defaultProps = { dispatch: null };
IndexLogin.propTypes = { dispatch: PropTypes.any };

export default IndexLogin;
