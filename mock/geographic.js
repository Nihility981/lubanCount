import city from './geographic/city.json';
import province from './geographic/province.json';

/** 获取省份 */
function getProvince(req, res) {
    return res.json(province);
}

/** 获得城市 */
function getCity(req, res) {
    return res.json(city[req.params.province]);
}

export default {
    'GET /api/geographic/province': getProvince,
    'GET /api/geographic/city/:province': getCity,
};
