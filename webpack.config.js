const path = require('path');

module.exports = {
  entry: {
    polyfill: './polyfills.ts',
    vendor: './vendor.ts',
    app: './helloWorld.ts',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/dist')
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'awesome-typescript-loader' },
    ]
  }
};
