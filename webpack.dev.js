const mergeWebpackConfig = require('webpack-merge');

const commonConfig = require('./webpack.common');

module.exports = mergeWebpackConfig(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
});
