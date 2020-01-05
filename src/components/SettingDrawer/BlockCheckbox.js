import React from 'react';
import { Tooltip, Icon } from 'antd';
import PropTypes from 'prop-types';
import style from './index.less';

/** */
const BlockChecbox = ({ value, onChange, list }) => (
    <div className={style.blockChecbox} key={value}>
        {list.map(item => (
            <Tooltip title={item.title} key={item.key}>
                <div className={style.item} onClick={() => onChange(item.key)}>
                    <img src={item.url} alt={item.key} />
                    <div
                        className={style.selectIcon}
                        style={{ display: value === item.key ? 'block' : 'none' }}
                    >
                        <Icon type="check" />
                    </div>
                </div>
            </Tooltip>
        ))}
    </div>
);

BlockChecbox.defaultProps = {
    value: '',
    onChange: '',
    list: '',
};
BlockChecbox.propTypes = {
    value: PropTypes.any,
    onChange: PropTypes.any,
    list: PropTypes.any,
};

export default BlockChecbox;
