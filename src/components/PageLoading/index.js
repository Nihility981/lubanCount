import React from 'react';
import { Spin } from 'antd';

// loading components from code split
// https://umijs.org/plugin/umi-plugin-react.html#dynamicimport
export default () => (
    <div style={{ paddingTop: 100, textAlign: 'center' }}>
        <Spin size="large" tip="正在努力为您获取数据中...请耐心等待" />
    </div>
);
