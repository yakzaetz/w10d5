const path = require('path');

module.exports = {
  entry: './src/widgets.jsx',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".jsx", "..."]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
        }   
    ]
  }
}