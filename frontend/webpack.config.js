const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './public/index.html.js',

  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: path.resolve(__dirname, 'public')
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({ filename:'main.[contenthash].css' }),
    new WorkboxWebpackPlugin.GenerateSW({
            swDest: 'sw.js',
            clientsClaim: true,
            skipWaiting: false,
          })
  ],

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: [path.resolve(__dirname, '/public')],
      loader: 'babel-loader'
    }, {
      test: /.(sa|sc|c)ss$/,

      use: [{
        loader: MiniCssExtractPlugin.loader
      }, {
        loader: "css-loader",

        options: {
          sourceMap: true
        }
      }, {
        loader: "sass-loader",

        options: {
          sourceMap: true
        }
      }]
    }]
  }
}