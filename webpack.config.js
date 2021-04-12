const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist',
    environment: {
      arrowFunction: false
    }
  },
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false}), // 静态资源不清除 index.html
    new HtmlWebpackPlugin({template: path.resolve(__dirname, "src", "index.html")})
  ]
}