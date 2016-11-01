const path = require('path')
const webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = [
  /* client settings */
  {
    entry: "./src/client.js",
    output: {
      path: path.join(__dirname, '..', 'public'),
      filename: "bundle.js",
      publicPath: '/'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.css$/,
          include: /styles\/.+/,
          loader:ExtractTextPlugin.extract(
            'style',
            'css?modules',
            'postcss'
          )
        }
      ]
    },
    postcss: function () {
      return [autoprefixer];
    },
    plugins: [
      new ExtractTextPlugin("styles.css")
    ]
  },
  /* server settings */
  {
    entry: './src/server.js',
    target: 'node',
    node: {
      __dirname: false,
      __filename: false
    },
    output: {
      path: path.join(__dirname, '..', 'dist'),
      filename: 'server.js',
      publicPath: '/'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.css$/,
          include: /styles\/.+/,
          loader:ExtractTextPlugin.extract(
            'style',
            'css?modules',
            'postcss'
          )
        },
        { test: /\.json$/, loader: "json-loader"}
      ]
    },
    postcss: function () {
      return [autoprefixer];
    },
    plugins: [
      new webpack.DefinePlugin({
        "global.GENTLY": false
      }),
      new ExtractTextPlugin("styles.css")
    ]
  }
]