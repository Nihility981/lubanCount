import request from '@/utils/request';

/**
 * login 登录
 * @author Terrence
 * @param string name [用户名]
 * @param string password [密码]
 */
export async function login(params) {
    const { name = '', password = '' } = params;
    return request('http://119.23.79.73:8080/login', {
        method: 'POST',
        data: JSON.stringify({
            usr: name,
            pwd: password,
            type: 2,
        }),
    });
}

/**
 * register 注册
 * @author Terrence
 * @param string name [用户名]
 * @param string password [密码]
 * @param string mobile [电话号码]
 */
export async function register(params) {
    const { name, password, mobile } = params;
    return request('http://119.23.79.73:8080/register', {
        method: 'POST',
        data: JSON.stringify({
            usr: name,
            pwd: password,
            phone_num: mobile,
        }),
    });
}

/**
 * setPassword 更改密码
 * @author Terrence
 * @param string password [密码]
 * @param string newPWD [新密码]
 */
export async function setPassword(params) {
    const { newPWD = '', password = '' } = params;
    return request('http://119.23.79.73:8080/update_password', {
        method: 'POST',
        data: JSON.stringify({
            old_pwd: password,
            new_pwd: newPWD,
        }),
    });
}


/**
 * logOut 退出登录
 * @author Terrence
 */
export async function logOut() {
    return request('http://119.23.79.73:8080/logout', { method: 'POST' });
}
