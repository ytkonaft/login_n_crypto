const rules = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: ['babel-loader'],
  },
  {
    test: /\.eot(\?v=\d+.\d+.\d+)?$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
  {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff',
          name: '[name].[ext]',
        },
      },
    ],
  },
  {
    test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/octet-stream',
          name: '[name].[ext]',
        },
      },
    ],
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'image/svg+xml',
          name: '[name].[ext]',
        },
      },
    ],
  },
  {
    test: /\.(jpe?g|png|gif|ico)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
];

export default rules;
