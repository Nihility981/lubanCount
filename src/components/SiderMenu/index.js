import React from 'react';
import { Drawer } from 'antd';
import PropTypes from 'prop-types';
import SiderMenu from './SiderMenu';
import { getFlatMenuKeys } from './SiderMenuUtils';

/** */
const SiderMenuWrapper = React.memo((props) => {
    const { isMobile, menuData, collapsed, onCollapse } = props;
    const flatMenuKeys = getFlatMenuKeys(menuData);
    return isMobile ? (
        <Drawer
            visible={!collapsed}
            placement="left"
            onClose={() => onCollapse(true)}
            style={{
                padding: 0,
                height: '100vh',
            }}
        >
            <SiderMenu {...props} flatMenuKeys={flatMenuKeys} collapsed={isMobile ? false : collapsed} />
        </Drawer>
    ) : (
        <SiderMenu {...props} flatMenuKeys={flatMenuKeys} />
    );
});
SiderMenuWrapper.defaultProps = {
    openKeys: '',
    theme: '',
    mode: '',
    location: '',
    className: '',
    collapsed: '',
    fixedHeader: '',
    layout: '',
    handleOpenChange: '',
    style: '',
    menuData: '',
    flatMenuKeys: '',
    isMobile: '',
    onCollapse: '',
};
SiderMenuWrapper.propTypes = {
    openKeys: PropTypes.any,
    theme: PropTypes.any,
    mode: PropTypes.any,
    location: PropTypes.any,
    className: PropTypes.any,
    collapsed: PropTypes.any,
    fixedHeader: PropTypes.any,
    layout: PropTypes.any,
    handleOpenChange: PropTypes.any,
    style: PropTypes.any,
    menuData: PropTypes.any,
    flatMenuKeys: PropTypes.any,
    isMobile: PropTypes.any,
    onCollapse: PropTypes.any,
};
export default SiderMenuWrapper;
