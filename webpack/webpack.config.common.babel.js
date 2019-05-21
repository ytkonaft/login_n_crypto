import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import rules from './utils/rules';

const config = (env) => {
  const PUBLIC_PATH = env.production ? '' : '/';

  return {
    entry: {
      index: './src/index.js'
    },
    output: {
      publicPath: PUBLIC_PATH,
      path: path.resolve(process.cwd(), 'dist'),
      filename: env.production ? '[name].js' : '[name].bundle.js'
    },
    resolve: {
      alias: {
        'react-dom': '@hot-loader/react-dom',
        app: path.resolve(process.cwd(), 'src/app/'),
        store: path.resolve(process.cwd(), 'src/store/'),
        ui: path.resolve(process.cwd(), 'src/ui/')
      },
      extensions: ['*', '.js', '.jsx', '.json', 'scss']
    },
    module: {
      rules
    },
    node: {
      dgram: 'empty',
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      child_process: 'empty'
    },
    plugins: [
      new Dotenv({
        systemvars: true
      }),
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        favicon: 'public/favicon.ico',
        inject: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        }
      })
    ]
  };
};

export default config;
