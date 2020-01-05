import React from 'react';
import { Icon } from 'antd';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './index.less';
/** */
const NumberInfo = ({ theme, title, subTitle, total, subTotal, status, suffix, gap, ...rest }) => (
    <div
        className={classNames(styles.numberInfo, { [styles[`numberInfo${theme}`]]: theme })}
        {...rest}
    >
        {title && (
            <div className={styles.numberInfoTitle} title={typeof title === 'string' ? title : ''}>
                {title}
            </div>
        )}
        {subTitle && (
            <div
                className={styles.numberInfoSubTitle}
                title={typeof subTitle === 'string' ? subTitle : ''}
            >
                {subTitle}
            </div>
        )}
        <div className={styles.numberInfoValue} style={gap ? { marginTop: gap } : null}>
            <span>
                {total}
                {suffix && <em className={styles.suffix}>{suffix}</em>}
            </span>
            {(status || subTotal) && (
                <span className={styles.subTotal}>
                    {subTotal}
                    {status && <Icon type={`caret-${status}`} />}
                </span>
            )}
        </div>
    </div>
);

NumberInfo.defaultProps = {
    theme: '',
    subTitle: '',
    title: '',
    total: '',
    subTotal: '',
    status: '',
    suffix: '',
    gap: '',
};
NumberInfo.propTypes = {
    theme: PropTypes.any,
    subTitle: PropTypes.any,
    title: PropTypes.any,
    total: PropTypes.any,
    subTotal: PropTypes.any,
    status: PropTypes.any,
    suffix: PropTypes.any,
    gap: PropTypes.any,
};

export default NumberInfo;
