import webpack from 'webpack';
import path from 'path';
import merge from 'webpack-merge';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import common from './webpack.config.common.babel';

const config = env => merge(common(env), {
  devtool: 'cheap-module-eval-source-map',
  target: 'web',
  mode: 'development',
  optimization: {
    minimize: false
  },
  performance: {
    hints: false
  },
  devServer: {
    historyApiFallback: true,
    contentBase: '../dist',
    port: 3009,
    hot: true,
    clientLogLevel: 'none'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /(\.css|\.scss|\.sass)$/,
        use: [
          {
            loader: 'style-loader',
            options: { singleton: true }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              /* eslint-disable global-require */
              plugins: () => [require('autoprefixer')],
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, 'src', 'scss')],
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    // new BundleAnalyzerPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});

export default config;
