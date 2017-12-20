var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname + "/js",
  entry: "./body.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /(\.js|\.jsx)$/,
      loader: 'babel-loader',
      exclude:/node_modules/,
      query: {
        presets:['react','es2017','stage-0']
      }
    }]
  },
  watch: true,
}