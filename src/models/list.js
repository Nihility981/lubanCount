import { message } from 'antd';
import { getList } from '@/services/list';

export default {
    namespace: 'list',

    state: { list: [] },

    effects: {
        /** 获取列表方法 */
        * getList({ payload, callBack = null }, { call, put }) {
            const response = yield call(getList, payload);
            // 登录成功
            if (response.code === 1) {
                const { data = [] } = response;
                /** 更新全局信息 */
                yield put({
                    type: 'setState',
                    payload: { list: data },
                });
                if (callBack) callBack(response);
            } else {
                message.error(response.err);
            }
        },
    },

    reducers: {
        /** 更新数据 */
        setState(state, { payload }) {
            return { ...state, ...payload };
        },
    },

    // subscriptions: {
    //     /** 获取列表信息 */
    //     initList({ dispatch }) {
    //         dispatch({ type: 'getList' });
    //     },
    // },
};
