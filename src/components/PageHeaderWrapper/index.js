import React from 'react';
import { FormattedMessage } from 'umi-plugin-react/locale';
import Link from 'umi/link';
import { PageHeader, Tabs, Typography, Button } from 'antd';
import { connect } from 'dva';
import * as history from 'umi/router';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import GridContent from './GridContent';
import styles from './index.less';
import MenuContext from '@/layouts/MenuContext';
import { conversionBreadcrumbList } from './breadcrumb';

const { Title } = Typography;

/**
 * render Footer tabList
 * In order to be compatible with the old version of the PageHeader
 * basically all the functions are implemented.
 */
const renderFooter = ({ tabList, tabActiveKey, onTabChange, tabBarExtraContent }) => (tabList && tabList.length ? (
    <Tabs
        className={styles.tabs}
        activeKey={tabActiveKey}
        onChange={(key) => {
            if (onTabChange) {
                onTabChange(key);
            }
        }}
        tabBarExtraContent={tabBarExtraContent}
    >
        {tabList.map(item => (
            <Tabs.TabPane tab={item.tab} key={item.key} />
        ))}
    </Tabs>
) : null);

renderFooter.defaultProps = {
    tabList: [],
    tabActiveKey: '',
    onTabChange: '',
    tabBarExtraContent: '',
};
renderFooter.propTypes = {
    tabList: PropTypes.any,
    tabActiveKey: PropTypes.any,
    onTabChange: PropTypes.any,
    tabBarExtraContent: PropTypes.any,
};

/**  */
const PageHeaderWrapper = ({
    // 控制返回跳转
    sign,
    children,
    contentWidth,
    fluid,
    wrapperClassName,
    home,
    top,
    title,
    content,
    logo,
    extraContent,
    hiddenBreadcrumb,
    ...restProps
}) => (
    <div style={{ margin: '-24px -24px 0' }} className={classNames(wrapperClassName, styles.main)}>
        {top}
        <MenuContext.Consumer>
            {value => (
                <div className={styles.wrapper}>
                    <div
                        // className={classNames({ [styles.wide]: !fluid && contentWidth === 'Fixed' })}
                        className="menuPageHead"
                    >
                        <PageHeader
                            title={title
                                        && (
                                        <>
                                            {logo && <span className={styles.logo}>{logo}</span>}
                                            <Title
                                                level={4}
                                                style={{
                                                    marginBottom: 0,
                                                    display: 'inline-block',
                                                }}
                                            >
                                                {title}
                                            </Title>
                                        </>
                                        )
                            }
                            key="pageheader"
                            {...restProps}
                            breadcrumb={
                                !hiddenBreadcrumb && conversionBreadcrumbList({
                                    ...value,
                                    ...restProps,
                                    ...(home !== null && { home: <FormattedMessage id="menu.home" defaultMessage="Home" /> }),
                                })
                            }

                            extra={[
                                // eslint-disable-next-line no-restricted-globals
                                (location.hash == '#/userManage')
                                    ? ''
                                    : (
                                        <Button
                                            key="1"
                                            className={styles.pageBack}
                                            onClick={() => {
                                                history.goBack();
                                            }}
                                        >
                                            返回
                                        </Button>
                                    ),
                            ]}
                            className={styles.pageHeader}
                            linkElement={Link}
                            footer={renderFooter(restProps)}
                        >
                            <div className={styles.detail}>
                                <div className={styles.main}>
                                    <div className={styles.row}>
                                        {content && <div className={styles.content}>{content}</div>}
                                        {extraContent && <div className={styles.extraContent}>{extraContent}</div>}
                                        {/* <div className={styles.extraContent}>test</div> */}
                                    </div>
                                </div>
                            </div>
                        </PageHeader>
                    </div>
                </div>
            )}
        </MenuContext.Consumer>
        {children ? (
            <div className={styles['children-content']}>
                <GridContent>{children}</GridContent>
            </div>
        ) : null}

    </div>
);

PageHeaderWrapper.defaultProps = {
    sign: '',
    children: '',
    contentWidth: '',
    fluid: '',
    wrapperClassName: '',
    home: '',
    top: '',
    title: '',
    content: '',
    logo: '',
    extraContent: '',
    hiddenBreadcrumb: '',
};
PageHeaderWrapper.propTypes = {
    sign: PropTypes.any,
    children: PropTypes.any,
    contentWidth: PropTypes.any,
    fluid: PropTypes.any,
    wrapperClassName: PropTypes.any,
    home: PropTypes.any,
    top: PropTypes.any,
    title: PropTypes.any,
    content: PropTypes.any,
    logo: PropTypes.any,
    extraContent: PropTypes.any,
    hiddenBreadcrumb: PropTypes.any,
};

export default connect(({ setting }) => ({ contentWidth: setting.contentWidth }))(PageHeaderWrapper);
