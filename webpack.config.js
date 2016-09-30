module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: __dirname + '/dist/',
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.(jsx?)$/,
        loaders: ["babel"],
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: 'dist',
    port: process.env.PORT
  },
};
