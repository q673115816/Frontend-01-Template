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
            this.templatePath('package.json'),
            this.destinationPath('package.json'),
            {title: 'Templating with Yeoman'}
        )
        this.npmInstall([
            'webpack',
            'webpack-cli',
            'webpack-dev-server'
        ], { 'save-dev': true })
    }

};