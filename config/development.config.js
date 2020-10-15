
const merge = require('webpack-merge');
const common = require('./common.config');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    https: true,
    port: 8080,
    disableHostCheck: true,
    historyApiFallback: true,
    publicPath: '/',
    overlay: true,
    open: true,
    stats: 'errors-only',
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
