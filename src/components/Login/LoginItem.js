import React, { Component } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import omit from 'omit.js';
import PropTypes from 'prop-types';
import styles from './index.less';
import ItemMap from './map';
import LoginContext from './loginContext';

const FormItem = Form.Item;


/** */
class WrapFormItem extends Component {
    static defaultProps = {
        getCaptchaButtonText: 'captcha',
        getCaptchaSecondText: 'second',
    };

    /** 构造函数 */
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            searchbutton: '获取验证码',
        };
    }

    /** 挂载后 */
    componentDidMount() {
        const { updateActive, name } = this.props;
        if (updateActive) {
            updateActive(name);
        }
    }

    /** 预加载 */
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    /** 手机验证码 */
    onGetCaptcha = () => {
        const { onGetCaptcha } = this.props;
        const result = onGetCaptcha ? onGetCaptcha() : null;
        if (result === false) {
            return;
        }
        if (result instanceof Promise) {
            result.then(this.runGetCaptchaCountDown);
        } else {
            // 触发发送邮件
            this.runGetCaptchaCountDown();
        }
    };

    /** 发送验证码 */
    runGetCaptchaCountDown = () => {
        const { countDown } = this.props;
        let count = countDown || 59;
        this.setState({ count });
        this.interval = setInterval(() => {
            count -= 1;
            this.setState({ count });
            if (count === 0) {
                clearInterval(this.interval);
            }
        }, 1000);
    };

    getFormItemOptions = ({ onChange, defaultValue, customprops, rules }) => {
        const options = { rules: rules || customprops.rules };
        if (onChange) {
            options.onChange = onChange;
        }
        if (defaultValue) {
            options.initialValue = defaultValue;
        }
        return options;
    }

    /** */
    render() {
        const { count, searchbutton } = this.state;

        const { form: { getFieldDecorator } } = this.props;

        // 这么写是为了防止restProps中 带入 onChange, defaultValue, rules props
        const {
            onChange,
            customprops,
            defaultValue,
            rules,
            name,
            getCaptchaButtonText,
            getCaptchaSecondText,
            updateActive,
            type,
            ...restProps
        } = this.props;

        // get getFieldDecorator props
        const options = this.getFormItemOptions(this.props);

        const otherProps = restProps || {};
        if (type === 'Password') {
            return (
                <FormItem>
                    {getFieldDecorator(name, options)(<Input.Password {...customprops} {...otherProps} autocomplete="off" />)}
                </FormItem>
            );
        }
        if (type === 'Captcha') {
            const inputProps = omit(otherProps, ['onGetCaptcha', 'countdown']);
            return (
                <FormItem>
                    <Row gutter={6}>
                        <Col span={16}>
                            {getFieldDecorator(name, options)(<Input {...customprops} {...inputProps} autocomplete="off" />)}
                        </Col>
                        <Col span={8}>
                            <Button
                                disabled={count}
                                className={styles.getCaptcha}
                                size="large"
                                onClick={this.onGetCaptcha}
                            >
                                {count ? `重新发送（${count} ${getCaptchaSecondText}）` : searchbutton}
                            </Button>
                        </Col>
                    </Row>
                </FormItem>
            );
        }
        return (
            <FormItem>
                {getFieldDecorator(name, options)(<Input {...customprops} {...otherProps} autocomplete="off" />)}
            </FormItem>
        );
    }
}

WrapFormItem.defaultProps = {
    onChange: '',
    customprops: '',
    defaultValue: '',
    rules: '',
    name: '',
    getCaptchaButtonText: '',
    getCaptchaSecondText: '',
    updateActive: '',
    type: '',
    form: '',
    onGetCaptcha: '',
    countDown: '',
    searchbutton: '',
    captcha: '',
    emailverification: '',
    dispatch: '',
};
WrapFormItem.propTypes = {
    onChange: PropTypes.any,
    customprops: PropTypes.any,
    defaultValue: PropTypes.any,
    rules: PropTypes.any,
    name: PropTypes.any,
    getCaptchaButtonText: PropTypes.any,
    getCaptchaSecondText: PropTypes.any,
    updateActive: PropTypes.any,
    type: PropTypes.any,
    form: PropTypes.any,
    onGetCaptcha: PropTypes.any,
    countDown: PropTypes.any,
    searchbutton: PropTypes.any,
    captcha: PropTypes.any,
    emailverification: PropTypes.any,
    dispatch: PropTypes.any,
};

const LoginItem = {};
Object.keys(ItemMap).forEach((key) => {
    const item = ItemMap[key];
    LoginItem[key] = props => (
        <LoginContext.Consumer>
            {context => (
                <WrapFormItem
                    customprops={item.props}
                    rules={item.rules}
                    {...props}
                    type={key}
                    updateActive={context.updateActive}
                    form={context.form}
                />
            )}
        </LoginContext.Consumer>
    );
});

export default LoginItem;
