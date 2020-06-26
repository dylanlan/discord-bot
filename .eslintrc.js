module.exports = {
    extends: [
        'airbnb-base',
        'plugin:chai-friendly/recommended',
        'plugin:promise/recommended',
        'plugin:unicorn/recommended',
    ],
    plugins: [
        'promise',
        'unicorn',
        'chai-friendly',
    ],
    env: {
        commonjs: true,
        node: true,
        mocha: true,
    },
    globals: {
        expect: true,
        chance: true,
    },
    rules: {
        indent: ['error', 4],
        'no-console': 0,
        'chai-friendly/no-unused-expressions': 2,
        'unicorn/prevent-abbreviations': 0,
    },
};
