import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'dva';
import { notification, Affix, Button } from 'antd';
import { getLoginSuccessContent } from '@/services/global';

/** 连接dva */
@connect()
/** 全局弹框组件 */
class Notice extends PureComponent {
    /** 构造器 */
    constructor(props) {
        super(props);
        this.state = {};
        this.getNotice();
    }

    /** 获取通知信息 */
    getNotice = async () => {
        const { send = 0, content = '欢迎' } = await getLoginSuccessContent();
        if (send == 1) {
            this.notice = notification.info({
                className: 'loginSuccess',
                message: '通知',
                duration: null,
                description: content,
                placement: 'bottomRight',
            });
            return true;
        }
        return true;
    }

    /** 组件挂载 */
    render() {
        return (
            <Affix style={{
                position: 'absolute',
                bottom: 200,
                right: 25,
                zIndex: 200,
                backgroundColor: 'transparent',
                borderRadius: 20,
                boxShadow: '0 0 20px black',
            }}
            >
                {/* 回到顶部 */}
                <Button
                    onClick={this.getNotice}
                    type="primary"
                    shape="circle"
                    icon="sound"
                    size="large"
                />
            </Affix>
        );
    }
}

// GlobalModels.defaultProps = { dispatch: () => {} };
// GlobalModels.propTypes = { dispatch: PropTypes.any };

export default Notice;
