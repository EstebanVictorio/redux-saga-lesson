var path = require('path');
var webpack = require('webpack');
var HWP = require('html-webpack-plugin');


let config = {
  mode: 'development',
  node: {
    __dirname: true,
    __filename: true
  },
  entry: {
    index: path.resolve(__dirname, '') + '/index.js'
  },
  plugins: [
    new HWP({
      template: "index.ejs",
      inject: "body",
      filename: "../index.html"
    })
  ],
  resolve: {
    extensions: ['.js']
  },
  output: {
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.js(x)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      }
    ]
  }

};

module.exports = config;
