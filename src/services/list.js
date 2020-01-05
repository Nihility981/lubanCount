import request from '@/utils/request';
import { isEmpty } from '@/utils/common';

/**
 * getList 获取列表
 * @author Terrence
 * @param string searchKey 搜索的关键词
 * @param string state 状态筛选
 */
export async function getList(params) {
    const { searchKey, state = '' } = params;
    return request('http://119.23.79.73:8080/query_fans_data', {
        method: 'POST',
        data: JSON.stringify({
            key: searchKey,
            state: isEmpty(state) ? '' : Number(state),
        }),
    });
}

/**
 * getShareUrl 获取分享链接
 * @author Terrence
 */
export async function getShareUrl() {
    return request('http://119.23.79.73:8080/create_share_url', { method: 'POST' });
}

/**
 * delOffline 删除离线账号
 * @author Terrence
 * @param array ids 账号ID
 */
export async function delOffline(params) {
    const { ids = [] } = params;
    return request('http://119.23.79.73:8080/delete_offline_data', {
        method: 'POST',
        data: JSON.stringify({ wxids: ids }),
    });
}

/**
 * getFansCount 统计粉丝数量
 * @author Terrence
 * @param array ids 统计的账号数量
 */
export async function getFansCount(params) {
    const { ids = [] } = params;
    return request('http://119.23.79.73:8080/count_total_fans', {
        method: 'POST',
        data: JSON.stringify({ wxids: ids }),
    });
}

/**
 * addCategory 创建分组
 * @author Terrence
 * @param string addCateName 分组名称
 * @param string addCateRemark 分组备注
 */
export async function addCategory(params) {
    const { addCateName = '', addCateRemark = '' } = params;
    return request('http://119.23.79.73:8080/create_group', {
        method: 'POST',
        data: JSON.stringify({ name: addCateName, remark: addCateRemark }),
    });
}

/**
 * getCategorys 查询分组
 * @author Terrence
 */
export async function getCategorys() {
    return request('http://119.23.79.73:8080/query_group', { method: 'POST' });
}

/**
 * delCategory 删除分组
 * @author Terrence
 */
export async function delCategory(params) {
    const { name = '' } = params;
    return request('http://119.23.79.73:8080/delete_group', {
        method: 'POST',
        data: JSON.stringify({ name }),
    });
}

/**
 * enterCategoryService 加入分组
 * @author Terrence
 * @param string name 分组名称
 * @param array ids 微信账号id
 */
export async function enterCategoryService(params) {
    const { ids = [], name = '' } = params;
    return request('http://119.23.79.73:8080/add_to_group', {
        method: 'POST',
        data: JSON.stringify({ name, wxids: ids }),
    });
}

/**
 * setTag 编辑标注
 * @author Terrence
 * @param string id 用户id
 * @param array ids 微信账号id
 */
export async function setTag(params) {
    const { id = 0, name = '' } = params;
    return request('http://119.23.79.73:8080/add_tag', {
        method: 'POST',
        data: JSON.stringify({ wxid: id, tag: name }),
    });
}

/**
 * deleteWx 删除微信数据
 * @author veikai
 * @param string id 微信id
 */
export async function deleteWx(params){
    const {id = 0} = params;
    return request('http://119.23.79.73:8080/delete_wx', {
        method: 'POST',
        data: JSON.stringify({wxid: id}),
    });
}

