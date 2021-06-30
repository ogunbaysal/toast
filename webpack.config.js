const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
var libraryName = 'toast';
var outputFile = libraryName + '.js';
module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    libraryExport: 'default',
    globalObject: 'this',
    umdNamedDefine: true
  },
  plugins: [
      new MiniCssExtractPlugin({
        filename: libraryName + '.css',
      })
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ],
  },
  resolve: {
    extensions: ['.js'],
    modules: [path.resolve(__dirname, 'src')],
  },
  mode: 'development',
  devtool: 'sourceMap',
};
