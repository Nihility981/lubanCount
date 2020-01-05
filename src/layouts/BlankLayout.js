import React from 'react';
import PropTypes from 'prop-types';
/** */
const BlankLayout = ({ children }) => <div>{children}</div>;
BlankLayout.defaultProps = { children: '' };
BlankLayout.propTypes = { children: PropTypes.any };

export default BlankLayout;
