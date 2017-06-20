const path = require('path');

module.exports = {
  entry: './app/index.ts',
  module: {
    rules: [
      {
        test: /\.css$/, 
        use: [
            'style-loader',
            'css-loader'
        ]
      }
    ]
  },
  output: {
    filename: 'app/bundle.js'
  }
};