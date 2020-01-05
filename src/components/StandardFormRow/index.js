import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './index.less';

/** */
const StandardFormRow = ({ title, children, last, block, grid, ...rest }) => {
    const cls = classNames(styles.standardFormRow, {
        [styles.standardFormRowBlock]: block,
        [styles.standardFormRowLast]: last,
        [styles.standardFormRowGrid]: grid,
    });

    return (
        <div className={cls} {...rest}>
            {title && (
                <div className={styles.label}>
                    <span>{title}</span>
                </div>
            )}
            <div className={styles.content}>{children}</div>
        </div>
    );
};
StandardFormRow.defaultProps = {
    title: '',
    children: '',
    last: '',
    block: '',
    grid: '',
};
StandardFormRow.propTypes = {
    title: PropTypes.any,
    children: PropTypes.any,
    last: PropTypes.any,
    block: PropTypes.any,
    grid: PropTypes.any,
};

export default StandardFormRow;
