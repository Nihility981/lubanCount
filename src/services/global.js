import request from '@/utils/request';

/**
 * getGlobalInfo [获取oa全局信息]
 * @author Terrence
 */
export async function getGlobalInfo() {
    return request('http://119.23.79.73:8080/manage/query_account', { method: 'POST' });
}

/**
 * getLoginSuccessContent [获取登录成功后的消息]
 * @author Terrence
 */
export async function getLoginSuccessContent() {
    return request('http://119.23.79.73:8080/get_announcement', { method: 'POST' });
}


export default getGlobalInfo;
