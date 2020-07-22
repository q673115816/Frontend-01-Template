
const path = require('path')
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './main.js'),
    optimization: {
        minimize: false
    },
    // devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [['@babel/plugin-transform-react-jsx', {
                            pragma: 'createElement'
                        }]]
                    }
                }
            },
            {
                test: /\.view/,
                use: {
                    loader: './myLoader.js'
                }
            }
        ]
    }
}