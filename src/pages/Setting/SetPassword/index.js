import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, message } from 'antd';
import { router } from 'umi';
import { setPassword } from '@/services/login';

/**
 * Password 更改密码
 * @author timlo
 */
class Password extends PureComponent {
    /** 构造函数 */
    constructor(props) {
        super(props);
        this.state = { };
    }

    /** 数据提交 */
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields(async (error, values) => {
            const { newPWD, newPWDS, password } = values;
            if (!error) {
                if (newPWD != newPWDS) {
                    message.error('两次密码输入不一致，请重新输入');
                } else {
                    const { code = 0, err = '' } = await setPassword({ newPWD, password });
                    if (code == 1) {
                        router.goBack();
                        return message.success('修改成功');
                    }
                    return message.warning(err);
                }
            }
            return true;
        });
    }

    /** 关闭 */
    close = () => {
        router.push('/userCenter');
    }

    /** 组件挂载 */
    render() {
        const { form } = this.props;
        const { getFieldDecorator } = form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        return (
            <div>
                <Form {...formItemLayout} style={{ marginTop: 20 }} onSubmit={this.handleSubmit}>
                    <Form.Item label="原始密码">
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入初始密码!',
                                },
                                {
                                    whitespace: true,
                                    message: '不能输入空格',
                                }, {
                                    pattern: /^[\u0021-\u007E]{6,16}$/,
                                    message: '密码格式不正确，格式应为6-16字符',
                                },
                            ],
                        })(<Input.Password />)}
                    </Form.Item>
                    <Form.Item label="新密码">
                        {getFieldDecorator('newPWD', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入新密码！',
                                },
                                {
                                    whitespace: true,
                                    message: '不能输入空格',
                                },
                                {
                                    pattern: /^[\u0021-\u007E]{6,16}$/,
                                    message: '密码格式不正确，格式应为6-16字符',
                                },
                            ],
                        })(<Input.Password />)}
                    </Form.Item>
                    <Form.Item label="确认密码">
                        {
                            getFieldDecorator('newPWDS', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请确认新密码!',
                                    },
                                    {
                                        whitespace: true,
                                        message: '不能输入空格',
                                    }, {
                                        pattern: /^[\u0021-\u007E]{6,16}$/,
                                        message: '密码格式不正确，格式应为6-16字符',
                                    },
                                ],
                            })(<Input.Password />)
                        }
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button onClick={() => router.goBack()}>关闭</Button>
                        <Button style={{ marginLeft: 15 }} type="primary" htmlType="submit">保存</Button>
                    </Form.Item>
                </Form>
            </div>

        );
    }
}

const SetPassword = Form.create({ name: 'setPassword' })(Password);

Password.defaultProps = {
    dispatch: null,
    form: {},
    submitKey: '',
    ForgotPassword: '',
    mobile: '',
};
Password.propTypes = {
    dispatch: PropTypes.any,
    form: PropTypes.any,
    submitKey: PropTypes.any,
    ForgotPassword: PropTypes.any,
    mobile: PropTypes.any,
};

export default SetPassword;
