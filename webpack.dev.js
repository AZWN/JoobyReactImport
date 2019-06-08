const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');

const port = process.env['application.port'] || 8080;

console.log('Backend port: ', port);

module.exports = merge(base, {
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        publicPath: '/dist/',
        overlay: {
            errors: true,
            warnings: false
        },
        port: 8081,
        hot: true,
        proxy: {
            "/": {
                target: 'http://localhost:' + port,
                bypass: function (req, res, proxyOptions) {
                    // Don't proxy hot reload requests.
                    if (/hot-update\.json$/.test(req.url)) {
                        return true;
                    }
                }
            }
        }
    }
});