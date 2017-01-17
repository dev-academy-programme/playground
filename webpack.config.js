module.exports = {
  entry: './client/index.js',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.less$/, loader: 'style!css!less', exclude: /node_modules/ },
      { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.less']
  },
  devtool: 'source-map'
}
