const fs = require('fs');
const { join } = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const pkg = require('../package.json');
const common = require('./webpack.common');

const commitHash = require('child_process').execSync('git rev-parse --short HEAD').toString();
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const root = join(__dirname, '../');
const src = join(root, 'src');
const pages = join(src, 'pug/pages');

const PAGES = fs.readdirSync(pages).filter((fileName) => fileName.endsWith('.pug'));

module.exports = merge(common, {
  mode: 'development',
  name: 'client',
  devtool: 'inline-source-map',

  output: {
    path: join(root, 'dist'),
    filename: '[name].[contenthash:10].js',
    chunkFilename: '[name].[contenthash:10].js',
    sourceMapFilename: '[name].[contenthash:10].map',
    assetModuleFilename: 'assets/[name].[contenthash:10].[ext]',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },

  devServer: {
    static: join(root, 'dist'),
    hot: true,
    open: '/',
    port: 3000,
    historyApiFallback: true,
  },

  // plugins: [new BundleAnalyzerPlugin()],

  plugins: [
    new MiniCssExtractPlugin(),
    ...PAGES.map(
      (page) =>
        new HtmlWebpackPlugin({
          template: `${pages}/${page}`,
          filename: `./${page.replace(/\.pug/, '.html')}`,
          page: `${page.replace(/\.pug/, '.html')}`,
          templateParameters: {
            title: 'template',
            buildTime: `Build at: ${new Date().toISOString()} `,
            commitHash: `Commit hash: ${commitHash} `,
            version: `App version: ${JSON.stringify(pkg.version)} `,
          },
          favicon: join(src, 'assets/img', 'favicon.png'),
        }),
    ),

    new SpriteLoaderPlugin(),
  ],

  stats: {
    errorDetails: true,
  },
});
