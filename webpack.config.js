const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const mode = process.env.NODE_ENV || 'development'

const plugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './src/index.html')
  })
]

module.exports = {
  devServer: {
    hot: true,
    open: true,
    port: 3000
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
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
    clean: true
  },
  plugins,
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
}
