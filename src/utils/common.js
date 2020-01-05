import { message } from 'antd';
import moment from 'moment';
import copyText from 'copy-to-clipboard';

/**
 * isEmpty [判断一个值是否为空]
 * @author Terrence
 * @param string key [description]
 * @return 是否为空
 */
export function isEmpty(key) {
    const type = typeof key;
    if (type == 'undefined' || type == 'null') return true;
    if (type == 'string') {
        const res = key.replace(/(^\s*)|(\s*$)/g, '');
        if (res == '' || res == null || res == 'null' || res == undefined || res == 'undefined') { return true; }
        return false;
    }
    if (type == 'object') {
    /** 数组或者对象 */
        if (key == null) return true;
        if (Object.keys(key).length > 0) return false;
        return true;
    }
    if (type == 'boolean') return !key;
    if (type == 'number') return !key;
    return true;
}

/**
 * jsonDecode [解析json]
 * @author Terrence
 * @param string json [要进行解析的json字符串]
 * @param object defaultValue [解析失败时的默认结果]
 * @return 解析值
 */
export function jsonDecode(json = '', defaultValue = []) {
    try {
        return JSON.parse(json);
    } catch (e) {
        return defaultValue;
    }
}

/**
 * emptyOrBlank [进行对象的判空处理，返回一个默认值]
 * @author Terrence
 * @param object object [要进行判空的对象]
 * @param string key [要进行判空的对象的键名]
 * @param any defaultValue [若是为空要进行设置默认值]
 * @param boolean isJson [是不是要进行解json操作]
 * @return 解析值
 */
export function emptyOrBlank(object, key, defaultValue = '', isJson = false) {
    if (Object.prototype.hasOwnProperty.call(object, key) && !isEmpty(object[key])) {
    /** 若是键存在且键值不为空 */
        if (isJson) {
            /** 若是要解json */
            return jsonDecode(object[key], defaultValue);
        } /** 直接读值 */
        return object[key];
    }
    return defaultValue;
}

/**
 * 存储 Session
 */
export function setSession(name, content) {
    if (isEmpty(name)) return false;
    if (typeof content !== 'string') {
        return window.sessionStorage.setItem(name, JSON.stringify(content));
    }
    return window.sessionStorage.setItem(name, content);
}
/**
 * 获取 Session
 */
export function getSession(name) {
    if (!name) return '';
    return window.sessionStorage.getItem(name) ? window.sessionStorage.getItem(name) : '';
}
/**
 * 清除 Session
 */
export function clearSession() {
    window.sessionStorage.clear();
}

/**
 * 存储 Storage
 */
export function setStorage(name, content) {
    if (isEmpty(name)) return false;
    if (typeof content !== 'string') {
        return window.localStorage.setItem(name, JSON.stringify(content));
    }
    return window.localStorage.setItem(name, content);
}
/**
 * 获取 Storage
 */
export function getStorage(name) {
    if (!name) return '';
    return window.localStorage.getItem(name) ? window.localStorage.getItem(name) : '';
}
/**
 * 清除 Storage
 */
export function clearStorage(name) {
    if (isEmpty(name)) window.localStorage.clear();
    window.localStorage.removeItem(name);
}

/**
 * copy [进行复制]
 * @author Terrence
 * @param {string} content [复制的文本内容]
 * @return {boolean} copyResult [复制是否成功]
 */
export function copy(content = '') {
    // // 创建input标签存放需要复制的文字
    // const oInput = document.createElement('input');
    // // 把文字放进input中，供复制
    // oInput.value = content;
    // document.body.appendChild(oInput);
    // // 选中创建的input
    // oInput.select();
    // // 执行复制方法， 该方法返回bool类型的结果，告诉我们是否复制成功
    // const copyResult = document.execCommand('copy');
    // // 操作中完成后 从Dom中删除创建的input
    // document.body.removeChild(oInput);
    // 根据返回的复制结果 给用户不同的提示
    if (copyText(content)) message.success('分享链接已复制到剪切板');
    else message.success('复制失败');
}


/**
 * runTimeFormat 对运行时间进行格式化
 * @author Terrence
 * @param {string} time [时间戳]
 * @return {string} 返回的时间字符串
 */
export function runTimeFormat(time = 0) {
    const date = moment.duration(time, 'milliseconds');
    const { _data: { seconds = 0, minutes = 0, hours = 0, days = 0 } } = date;
    let result = '';
    if (days) result += `${days}日`;
    result += `${hours}时`;
    result += `${minutes}分`;
    result += `${seconds}秒`;
    return result;
}
