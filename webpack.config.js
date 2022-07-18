const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';
const mode = process.env.NODE_ENV || 'development';

const plugins = [
  new CopyPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, './public'),
        to: path.resolve(__dirname, './build/static'),
        noErrorOnMissing: true,
      },
    ],
  }),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './src/index.html'),
    favicon: path.resolve(__dirname, './public/yemeksepeti-logo.ico'),
  }),
];

if (isDev) {
  plugins.push(new ReactRefreshWebpackPlugin());
}

if (!isDev) {
  plugins.push(new MiniCssExtractPlugin());
}

module.exports = {
  devServer: {
    hot: true,
    open: true,
    port: 3000,
  },
  devtool: isDev && 'cheap-module-source-map',
  entry: path.resolve(__dirname, './src/index.tsx'),
  mode,
  module: {
    rules: [
      { test: /\.(?:ico|gif|png|jpe?g)$/i, type: 'asset/resource' },
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[name]__[local]',
              },
              url: false,
            },
          },
          'resolve-url-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: ['postcss-preset-env'],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              additionalData: '@import "styles/placeholders.scss";@import "styles/variables.scss";',
              sourceMap: true,
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
    path: path.resolve(__dirname, './build/static'),
    filename: 'bundle.js',
    clean: true,
  },
  plugins,
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      layouts: path.resolve(__dirname, './src/components/_layouts'),
      lib: path.resolve(__dirname, './src/lib'),
      pages: path.resolve(__dirname, './src/pages'),
      routes: path.resolve(__dirname, './src/routes'),
      styles: path.resolve(__dirname, './src/styles'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
  },
  target: isDev ? 'web' : 'browserslist',
};
