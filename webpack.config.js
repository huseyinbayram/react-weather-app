var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devTool: [
    'source-map'
  ],
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],
  devServer: {
    inline: true,
    port: 3333
  }
}
