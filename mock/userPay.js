import { delay } from 'roadhog-api-doc';


const proxy = {
    // 获取公司详细信息
    'POST /tonpalgs/onShow': {
        code: 204,
        msg: '深挖条数已满',
    },
    // 用户对搜索功能付款
    'POST /tonpalgs/searchPay': {
        code: 200,
        msg: '信息获取成功',
        vipTime: 'monthVip',
        vipPayType: 'payPal',
        payCode: '//q.zvk9.com/1718/2018/05/11/Jade Pendant Cross-152600752527.png_thumb_220x220.jpg',
    },
};

// 调用 delay 函数，统一处理
export default delay(proxy, 1000);
