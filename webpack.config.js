const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';
const mode = process.env.NODE_ENV || 'development';

const plugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './src/index.html'),
  }),
];

if (isDev) {
  plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
  devServer: {
    hot: true,
    open: true,
    port: 3000,
  },
  entry: path.resolve(__dirname, './src/index.tsx'),
  mode,
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
    clean: true,
  },
  plugins,
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
