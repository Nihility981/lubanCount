import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'dva';
import { BackTop } from 'antd';

import Notice from './Notice';

/** 连接dva */
@connect()
/** 全局弹框组件 */
class GlobalModels extends PureComponent {
    /** 构造器 */
    constructor(props) {
        super(props);
        this.state = {};
    }

    /** 组件挂载 */
    render() {
        return (
            <>
                {/* 回到顶部 */}
                <BackTop style={{ bottom: 80, right: 10 }} />
                {/* 提示框 */}
                <Notice />
            </>
        );
    }
}

// GlobalModels.defaultProps = { dispatch: () => {} };
// GlobalModels.propTypes = { dispatch: PropTypes.any };

export default GlobalModels;
