const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  plugins: [
    new UglifyJSPlugin({
      // These options are can be found in;
      // https://github.com/webpack-contrib/uglifyjs-webpack-plugin
      parallel: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}
