module.exports = {
    extends: ['airbnb-typescript-prettier'],
    settings: {
        'import/resolver': {
            typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
        },
    },
    rules: {
        // 'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['off'],
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
    },
};
