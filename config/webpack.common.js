const { join } = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const root = join(__dirname, '../');
const src = join(root, 'src');

module.exports = {
  entry: ['@babel/polyfill', join(src, 'index.js')],

  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name].[contenthash:10][ext]',
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  performance: {
    hints: false,
  },

  resolve: {
    extensions: ['.js'],
    alias: {
      '@src': src,
      '@utils': join(src, 'utils'),
    },
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new Dotenv({
      systemvars: true,
    }),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
  ],
};
