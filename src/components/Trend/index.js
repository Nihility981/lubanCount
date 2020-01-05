import React from 'react';
import { Icon } from 'antd';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './index.less';
/** */
const Trend = ({ colorful = true, reverseColor = false, flag, children, className, ...rest }) => {
    const classString = classNames(
        styles.trendItem,
        {
            [styles.trendItemGrey]: !colorful,
            [styles.reverseColor]: reverseColor && colorful,
        },
        className,
    );
    return (
        <div {...rest} className={classString} title={typeof children === 'string' ? children : ''}>
            <span>{children}</span>
            {flag && (
                <span className={styles[flag]}>
                    <Icon type={`caret-${flag}`} />
                </span>
            )}
        </div>
    );
};
Trend.defaultProps = {
    children: '',
    className: '',
    flag: '',
    reverseColor: '',
    colorful: 'light',
};
Trend.propTypes = {
    children: PropTypes.any,
    className: PropTypes.any,
    flag: PropTypes.any,
    reverseColor: PropTypes.any,
    colorful: PropTypes.any,

};

export default Trend;
