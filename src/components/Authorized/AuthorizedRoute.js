import React from 'react';
import { Route, Redirect } from 'umi';
import PropTypes from 'prop-types';
import Authorized from './Authorized';

/* TODO: umi只会返回render和rest */
/** Authorize Route */
const AuthorizedRoute = ({ component: Component, render, authority, redirectPath, ...rest }) => (
    <Authorized
        authority={authority}
        noMatch={<Route {...rest} render={() => <Redirect to={{ pathname: redirectPath }} />} />}
    >
        <Route {...rest} render={props => (Component ? <Component {...props} /> : render(props))} />
    </Authorized>
);
AuthorizedRoute.defaultProps = {
    component: '',
    render: '',
    authority: '',
    redirectPath: '',

};
AuthorizedRoute.propTypes = {
    component: PropTypes.any,
    render: PropTypes.any,
    authority: PropTypes.any,
    redirectPath: PropTypes.any,
};
export default AuthorizedRoute;
