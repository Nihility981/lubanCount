import { getGlobalInfo } from '@/services/global';

export default {
    namespace: 'global',

    state: {
        collapsed: false,
        /** 用户信息 */
        user: {},
    },

    effects: {
        /** 获取全局信息 */
        * getGlobalInfo(_, { call, put }) {
            const response = yield call(getGlobalInfo);
            const { data = {} } = response;
            yield put({
                type: 'setState',
                payload: { user: data },
            });
        },
        /** 获取当前用户的角色(用于权限管理) */
        * getRole({ callBack }, { select }) {
            const role = yield select(state => state.global.role);
            if (callBack) callBack(role);
        },
    },

    reducers: {
        /** */
        changeLayoutCollapsed(state, { payload }) {
            return {
                ...state,
                collapsed: payload,
            };
        },
        /** 更新数据 */
        setState(state, { payload }) {
            return { ...state, ...payload };
        },
    },
    // subscriptions: {
    //     /** 获取全局信息 */
    //     getGlobal({ dispatch }) {
    //         dispatch({ type: 'getGlobalInfo' });
    //     },
    // },
};
