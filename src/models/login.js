import router from 'umi/router';
import { message } from 'antd';
import { login, register, logOut } from '@/services/login';
import { setAuthority } from '@/utils/authority';
import { reloadAuthorized } from '@/utils/Authorized';

export default {
    namespace: 'login',

    state: {
        /** 用户角色 */
        role: 0,
    },

    effects: {
        /** USER登录方法 */
        * login({ payload, callBack = null }, { call }) {
            const { code = 0, role = 0, err = '' } = yield call(login, payload);
            // 登录成功
            if (code === 1) {
                /** 设置权限 */
                setAuthority(String(role));
                reloadAuthorized(String(role));
                message.success('登录成功');
                if (callBack) yield callBack();
            } else {
                message.error(err);
            }
        },
        /** USER注册方法 */
        * register({ payload, callBack = null }, { call }) {
            const response = yield call(register, payload);
            // 登录成功
            if (response.code === 1) {
                message.success('注册成功');
                /** 更新全局信息 */
                router.push('/login');
                if (callBack) callBack();
            } else {
                message.error(response.err);
            }
        },
        /** 注销 */
        * logOut(_, { call }) {
            const response = yield call(logOut);
            if (response.code == 1) {
                setAuthority(0);
                message.success('您已退出');
                router.push('/login');
            }
        },
    },

    reducers: {
        /** 更新数据 */
        setState(state, { payload }) {
            return { ...state, ...payload };
        },
    },

};
