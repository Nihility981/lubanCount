

// use localStorage to store the authority info, which might be sent from server in actual project.
import { isEmpty } from '@/utils/common';
/** */
export function getAuthority(str = '') {
    // return localStorage.getItem('antd-pro-authority') || ['admin', 'user'];
    const authorityString = isEmpty(str) ? localStorage.getItem('role') : str;
    // authorityString could be admin, "admin", ["admin"]
    let authority;
    try {
        authority = JSON.parse(authorityString);
    } catch (e) {
        authority = authorityString;
    }
    if (typeof authority === 'string') {
        return [authority];
    }
    // preview.pro.ant.design only do not use in your production ; preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
    // eslint-disable-next-line no-undef
    if (!authority && ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
        return ['admin'];
    }
    return authority;
}
/** */
export function setAuthority(authority) {
    const proAuthority = typeof authority === 'string' ? [authority] : authority;
    if (isEmpty(authority)) {
        return localStorage.removeItem('role'); /** 将用户身份信息清零 */
    }
    return localStorage.setItem('role', JSON.stringify(proAuthority));
}
