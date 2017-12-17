const path = require('path');

const config = {
  entry: ['babel-polyfill', './lib/components/index'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: ['style-loader', 'css-loader?modules&localIdentName=[local]---[hash:base64:5]', 'cssnext-loader'] }
    ]
  }
};

module.exports = config;
