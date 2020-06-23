 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin')
 const { CleanWebpackPlugin } = require('clean-webpack-plugin')

 module.export = {
     mode: 'production',
     entry: './src/index.js',
     output: {
         filename: 'main.js',
         path: path.resolve(__dirname, 'dist')
     },

     devtools: 'inline-source-map',

     devServer: {
         contentBase: path.join(__dirname, 'dist'),
         compress: true,
         port: 4000
     },

     plugins: [
         // cleans the dist directory before another  build is executed
         new CleanWebpackPlugin({
             // prevents removal of index.html file during cleaning
             cleanStaleWebPackAssets: false
         }),
         new HtmlWebpackPlugin({})
     ]
 }