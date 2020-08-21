const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    bundle: './src/index.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  output: {
    filename: '[name].js'
  },
  module: {
      rules: [
          { test: /\.js/, use: 'babel-loader' },
          {
            test: /\.css/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
          },
          {
            test: /\.json$/,
            type: 'javascript/auto',
            loader: 'json-loader'
          }
      ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin()
  ]
};
