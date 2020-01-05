export default [
    /** login 登录页 */
    {
        path: '/login',
        component: '../layouts/UserLayout',
        routes: [
            {
                path: '/',
                redirect: '/login',
            },
            {
                path: '/login',
                name: 'login',
                component: './Login',
            },
            {
                path: '/login/register',
                name: 'register',
                component: './Login/Register',
            },
            { component: './404.js' },
        ],
    },
    /** 管理列表页 */
    {
        path: '/',
        component: '../layouts/BasicLayout',
        Routes: ['src/pages/Authorized'],
        routes: [
            {
                path: '/',
                redirect: '/home',
            },
            {
                path: '/home',
                name: 'home',
                icon: 'home',
                authority: ['1', '2'],
                component: './Home',
            },
            {
                path: '/list/wechat',
                name: 'wechat',
                icon: 'wechat',
                authority: ['1', '2'],
                component: './List/Wechat',
            },
            {
                path: '/admin',
                name: 'admin',
                icon: 'team',
                authority: ['1'],
                component: './Admin',
            },
            {
                path: '/setPassword',
                name: 'setPassword',
                hideInMenu: true,
                component: './Setting/SetPassword',
            },
            { component: './404.js' },
        ],
    },
];
