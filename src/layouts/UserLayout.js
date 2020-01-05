import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { connect } from 'dva';
import PropTypes from 'prop-types';

/** */
class UserLayout extends Component {
    /** 预挂载 */
    componentDidMount() {
    }

    /** 组件挂载 */
    render() {
        const { children } = this.props;
        return (
            <Row>
                <div style={{ position: 'absolute', zIndex: -10 }}>
                    <img src="./bg.svg" alt="" style={{ height: '100vh', width: '100%' }} />
                </div>
                <Col
                    span={6}
                    offset={9}
                    style={{ overflow: 'hidden', height: '100vh', paddingTop: 50 }}
                >
                    {children}
                </Col>
            </Row>
        );
    }
}

UserLayout.defaultProps = { children: '' };

UserLayout.propTypes = { children: PropTypes.any };
export default connect(({ menu: menuModel }) => ({
    menuData: menuModel.menuData,
    breadcrumbNameMap: menuModel.breadcrumbNameMap,
}))(UserLayout);
