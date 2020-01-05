import React, { PureComponent } from 'react';
import { Button, Spin, Card } from 'antd';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './style.less';
/** */
@connect(state => ({ isloading: state.error.isloading }))
class TriggerException extends PureComponent {
  state = { isloading: false };

  triggerError = (code) => {
      this.setState({ isloading: true });
      const { dispatch } = this.props;
      dispatch({
          type: 'error/query',
          payload: { code },
      });
  };

  /** */
  render() {
      const { isloading } = this.state;
      return (
          <Card>
              <Spin spinning={isloading} wrapperClassName={styles.trigger} tip="正在努力为您获取数据中...请耐心等待">
                  <Button type="danger" onClick={() => this.triggerError(401)}>触发401</Button>
                  <Button type="danger" onClick={() => this.triggerError(403)}>触发403</Button>
                  <Button type="danger" onClick={() => this.triggerError(500)}>触发500</Button>
                  <Button type="danger" onClick={() => this.triggerError(404)}>触发404</Button>
              </Spin>
          </Card>
      );
  }
}
TriggerException.defaultProps = { dispatch: '' };
TriggerException.propTypes = { dispatch: PropTypes.any };
export default TriggerException;
