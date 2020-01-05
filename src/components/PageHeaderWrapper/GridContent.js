import React, { PureComponent } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './GridContent.less';
/** */
class GridContent extends PureComponent {
    /** */
    render() {
        const { contentWidth, children } = this.props;
        let className = `${styles.main}`;
        if (contentWidth === 'Fixed') {
            className = `${styles.main} ${styles.wide}`;
        }
        return <div className={className}>{children}</div>;
    }
}
GridContent.defaultProps = {
    contentWidth: '',
    children: '',
};
GridContent.propTypes = {
    contentWidth: PropTypes.any,
    children: PropTypes.any,
};

export default connect(({ setting }) => ({ contentWidth: setting.contentWidth }))(GridContent);
