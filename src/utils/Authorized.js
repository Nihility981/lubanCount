import RenderAuthorize from '@/components/Authorized';
import { getAuthority } from './authority';

// eslint-disable-next-line import/no-mutable-exports
let Authorized = RenderAuthorize(getAuthority());

/** */
const reloadAuthorized = (role = '') => {
    Authorized = RenderAuthorize(getAuthority(role));
};
export { reloadAuthorized };
export default Authorized;
