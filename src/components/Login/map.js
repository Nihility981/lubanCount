import React from 'react';
import { Icon } from 'antd';
import styles from './index.less';

export default {
    UserName: {
        props: {
            size: 'large',
            id: 'userName',
            prefix: <Icon type="mobile" className={styles.prefixIcon} />,
            placeholder: '手机号',
        },
        rules: [
            {
                required: true,
                message: '请输入手机号!',
            },
            {
                whitespace: true,
                message: '不能输入空格',
            },
            {
                pattern: /^[1]([3-9])[0-9]{9}$/,
                message: '请输入正确的手机号码!',
            },
        ],
    },
    Password: {
        props: {
            size: 'large',
            prefix: <Icon type="lock" className={styles.prefixIcon} />,
            type: 'password',
            id: 'password',
            placeholder: '密码',
        },
        rules: [
            {
                required: true,
                message: '请输入密码!',
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
    },
    Mobile: {
        props: {
            size: 'large',
            prefix: <Icon type="mobile" className={styles.prefixIcon} />,
            placeholder: '手机号',
        },
        rules: [
            {
                required: true,
                message: '请输入手机号码!',
            },
            {
                pattern: /^[1]([3-9])[0-9]{9}$/,
                message: '请输入正确的手机号码!',
            },
        ],
    },
    Captcha: {
        props: {
            size: 'large',
            prefix: <Icon type="mail" className={styles.prefixIcon} />,
            placeholder: '验证码',
            id: 'verificationCode',
            value: '',
        },
        rules: [
            {
                required: true,
                message: '请输入验证码!',
            },
        ],
    },
    Account: {
        props: {
            size: 'large',
            prefix: <Icon type="qq" className={styles.prefixIcon} />,
            placeholder: 'QQ号',
        },
    },
};
