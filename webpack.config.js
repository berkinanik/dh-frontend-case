const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

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

if (!isDev) {
  plugins.push(
    new MiniCssExtractPlugin({
      filename: '[name].[fullhash].css',
      chunkFilename: '[id].[fullhash].css',
    })
  );
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
        test: /\.(sa|sc|c)ss$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64]',
              },
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: '@import "styles/placeholders.scss";@import "styles/variables.scss";',
              sassOptions: {
                includePaths: [__dirname, 'src/components'],
              },
            },
          },
        ],
      },
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
  optimization: {
    minimize: !isDev,
    minimizer: [!isDev && new TerserPlugin()].filter(Boolean),
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
      styles: path.resolve(__dirname, './src/styles'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
  },
};
