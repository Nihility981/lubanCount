import CheckPermissions from './CheckPermissions';

/** Authorize */
const Authorized = ({ children, authority, noMatch = null }) => {
    const childrenRender = typeof children === 'undefined' ? null : children;
    return CheckPermissions(authority, childrenRender, noMatch);
};
export default Authorized;
