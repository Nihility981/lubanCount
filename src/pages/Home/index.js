import React, { PureComponent } from 'react';
import { connect } from 'dva';
// import PropTypes from 'prop-types';
import router from 'umi/router';
import { Button, Result } from 'antd';
/** 连接dva */
@connect()
/** 账号登录/手机号登录 */
class Home extends PureComponent {
    /** 构造器 */
    constructor(props) {
        super(props);
        this.onLoad();
    }

    /** 初始化 */
    onLoad = () => { }

    /** 组件挂载 */
    render() {
        return (
            <Result
                status="success"
                title="成功进入鲁班计数器"
                subTitle="欢迎使用"
                style={{ marginTop: 100 }}
                extra={[
                    <Button type="primary" key="use" onClick={() => router.push('/list/wechat')}>前往使用</Button>,
                ]}
            />
        );
    }
}

// Home.defaultProps = { dispatch: null };
// Home.propTypes = { dispatch: PropTypes.any };

export default Home;
