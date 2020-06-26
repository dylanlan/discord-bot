module.exports = {
    extension: ['js'],
    package: './package.json',
    reporter: 'spec',
    timeout: '5000',
    require: [
        'chai/register-expect', './test/setup.js'
    ]
}