const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const reactConfig = {
    context: __dirname,
    entry: './main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    'watch': true,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};

const cssConfig = {
    context: __dirname,
    entry: './scss/main.scss',
    output: {
        path: __dirname + '/dist',
        filename: 'ignore.css'
    },
    'watch': true,
    module: {
        rules: [
            {
                test: [/\.scss$/],
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.min.css'
        })
    ]
};

module.exports = [reactConfig, cssConfig];