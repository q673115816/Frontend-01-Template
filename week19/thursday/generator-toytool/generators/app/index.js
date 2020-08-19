var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    // The name `constructor` is important here
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);

        // Next, add your custom code
        this.option('babel'); // This method adds support for a `--babel` flag
    }

    collecting() {
        this.log('collecting')
    }

    creating() {
        this.fs.copyTpl(
            this.templatePath('src/parser.js'),
            this.destinationPath('src/parser.js'),
            {title: 'Templating with Yeoman'}
        )
        this.fs.copyTpl(
            this.templatePath('test/parser.test.js'),
            this.destinationPath('test/parser.test.js'),
            {title: 'Templating with Yeoman'}
        )
        this.fs.copyTpl(
            this.templatePath('.babelrc.js'),
            this.destinationPath('.babelrc.js'),
            {title: 'Templating with Yeoman'}
        )
        this.fs.copyTpl(
            this.templatePath('animate.js'),
            this.destinationPath('animate.js'),
            {title: 'Templating with Yeoman'}
        )
        this.fs.copyTpl(
            this.templatePath('createElement.js'),
            this.destinationPath('createElement.js'),
            {title: 'Templating with Yeoman'}
        )
        this.fs.copyTpl(
            this.templatePath('cubicBezier.js'),
            this.destinationPath('cubicBezier.js'),
            {title: 'Templating with Yeoman'}
        )
        this.fs.copyTpl(
            this.templatePath('drop.js'),
            this.destinationPath('drop.js'),
            {title: 'Templating with Yeoman'}
        )
        this.fs.copyTpl(
            this.templatePath('index.js'),
            this.destinationPath('index.js'),
            {title: 'Templating with Yeoman'}
        )
        this.fs.copyTpl(
            this.templatePath('main.js'),
            this.destinationPath('main.js'),
            {title: 'Templating with Yeoman'}
        )
        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath('package.json'),
            {title: 'Templating with Yeoman'}
        )
        this.fs.copyTpl(
            this.templatePath('webpack.config.js'),
            this.destinationPath('webpack.config.js'),
            {title: 'Templating with Yeoman'}
        )
        this.npmInstall([
            'webpack',
            'webpack-cli',
            'webpack-dev-server',
            '@ava/babel',
            '@babel/register',
            '@istanbuljs/nyc-config-babel',
            'babel-plugin-istanbul',
            'mocha',
            'nyc',
            '@babel/core',
            '@babel/plugin-transform-react-jsx',
            '@babel/preset-env',
            'babel-loader',
        ], { 'save-dev': true })
    }

};