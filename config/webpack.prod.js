const { join } = require('path');
const { merge } = require('webpack-merge');
const ESLintPlugin = require('eslint-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

const root = join(__dirname, '../');
const src = join(root, 'src');

module.exports = merge(common, {
  mode: 'production',
  name: 'client',
  target: 'browserslist',

  output: {
    path: join(root, 'dist'),
    filename: '[name].[chunkhash:10].js',
    chunkFilename: '[name].[chunkhash:10].js',
    assetModuleFilename: 'assets/[name].[chunkhash:10][ext]',
  },

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: ['css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },

  optimization: {
    runtimeChunk: 'single',
    minimizer: [`...`, new CssMinimizerPlugin()],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        styles: {
          name: 'main',
          type: 'css/mini-extract',
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },

  plugins: [
    new ESLintPlugin({
      extensions: ['js'],
      fix: false,
      failOnError: true,
    }),
    new HtmlWebpackPlugin({
      template: join(src, 'index.pug'),
      templateParameters: {
        title: 'Project Management App',
        buildTime: '',
        commitHash: '',
        version: '',
      },
      favicon: join(src, 'assets/img', 'favicon.png'),
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash:10].css',
      chunkFilename: 'styles/[name].[contenthash:10].css',
    }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ['gifsicle', { interlaced: true }],
          ['jpegtran', { progressive: true }],
          ['optipng', { optimizationLevel: 5 }],
          [
            'svgo',
            {
              plugins: [
                {
                  removeViewBox: false,
                  removeDoctype: false,
                },
              ],
            },
          ],
        ],
      },
    }),
  ],
});
