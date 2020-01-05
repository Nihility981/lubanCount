module.exports = {
    // 环境，这里可以设置环来做区别判断
    env: {
        browser: true,
        commonjs: true,
        es6: true,
    },
    // 使用的扩展库
    extends: ['airbnb'],
    // 解析器用于解析代码
    parser: 'babel-eslint',
    // 解析器配置
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    // 可以全局使用变量
    globals: {
        Babel: true,
        React: true,
    },
    // 第三方插件
    plugins: ['react'],
    // 规则配置
    rules: {
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        //缩进风格
        indent: [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-indent': [2, 4],
        //不限制每一行的字符数
        'max-len': 0,
        // 不区分是否在 despendencies
        'import/no-extraneous-dependencies': 0,
        // 引用时候根据根目录基础
        'import/no-unresolved': 0,
        "react/jsx-curly-brace-presence": [ 0, {
            "props": "always",
            "children": "always"
        }],
        // 允许在 .js 和 .jsx 文件中使用  jsx
        'react/jsx-filename-extension': [1, {
            extensions: ['.js', '.jsx']
        }],
        //必须使用全等于 ===
        eqeqeq: 0,
        //禁止object对象出现换行，或者换行后仅允许一行存在
        'object-curly-newline': [
            'error',
            {
                ObjectExpression: {
                    multiline: true
                },
                ObjectPattern: {
                    multiline: true
                },
                ImportDeclaration: 'never',
                ExportDeclaration: {
                    multiline: true,
                    minProperties: 3
                },
            },
        ],
        'max-statements': ['error', 100],
        'require-jsdoc': [
            'error',
            {
                require: {
                    FunctionDeclaration: true,
                    MethodDefinition: true,
                    ClassDeclaration: true,
                    ArrowFunctionExpression: true,
                    FunctionExpression: true,
                },
            },
        ],

        //关闭 非Button的 onClick 事件需要至少一个键盘事件 规则
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'linebreak-style': [0, 'error', 'windows'],

        //prop验证的的规则
        'react/forbid-prop-types': [
            1,
            {
                forbid: [''],
            },
        ],
        'react/destructuring-assignment': [1, 'always', {
            ignoreClassFields: true
        }],
        'no-param-reassign': ['error', {
            props: false
        }],
    },
};