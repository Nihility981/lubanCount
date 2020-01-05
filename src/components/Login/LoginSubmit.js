import React from 'react';
import classNames from 'classnames';
import { Button, Form } from 'antd';
import PropTypes from 'prop-types';
import styles from './index.less';

const FormItem = Form.Item;
/** */
const LoginSubmit = ({ className, ...rest }) => {
    const clsString = classNames(styles.submit, className);
    return (
        <FormItem>
            <Button size="large" className={clsString} type="primary" htmlType="submit" {...rest} />
        </FormItem>
    );
};
LoginSubmit.defaultProps = { className: '' };
LoginSubmit.propTypes = { className: PropTypes.any };

export default LoginSubmit;
