import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './index.less';
/**  */
const GlobalFooter = ({ className, links, copyright }) => {
    const clsString = classNames(styles.globalFooter, className);
    return (
        <footer className={clsString}>
            {links && (
                <div className={styles.links}>
                    {links.map(link => (
                        <a
                            key={link.key}
                            title={link.key}
                            target={link.blankTarget ? '_blank' : '_self'}
                            href={link.href}
                        >
                            {link.title}
                        </a>
                    ))}
                </div>
            )}
            {copyright && <div className={styles.copyright}>{copyright}</div>}
        </footer>
    );
};
GlobalFooter.defaultProps = {
    className: '',
    links: '',
    copyright: '',

};
GlobalFooter.propTypes = {
    className: PropTypes.any,
    links: PropTypes.any,
    copyright: PropTypes.any,
};
export default GlobalFooter;
