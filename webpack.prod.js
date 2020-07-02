const mergeWebpackConfig = require('webpack-merge');

const commonConfig = require('./webpack.common');

module.exports = mergeWebpackConfig(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
});
