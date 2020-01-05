import React, { PureComponent } from 'react';
import { Dropdown } from 'antd';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './index.less';
/**  */
export default class HeaderDropdown extends PureComponent {
    /**  */
    render() {
        const { overlayClassName, ...props } = this.props;
        return (
            <Dropdown overlayClassName={classNames(styles.container, overlayClassName)} {...props} />
        );
    }
}
HeaderDropdown.defaultProps = { overlayClassName: '' };
HeaderDropdown.propTypes = { overlayClassName: PropTypes.any };
