var path = require('path')
var webpack = require('webpack')
// var $ = require('jquery');
// require('jquery.easing')(jquery);
module.exports = {
  entry: path.join(__dirname, 'src/client/index.js'),
  output: {
    path: path.join(__dirname, 'src/server/public/javascripts/'),
    publicPath: '/javascripts/',
    filename: 'build.js'
  },
  resolve: {
    extensions: ['', '.js', '.vue']
  },
  // devServer: {
  //   historyApiFallback: true,
  //   noInfo: true,
  //   proxy: [
  //     {
  //       context: ['/api'],
  //       target: 'http://localhost:3000',
  //       changeOrigin: true,
  //       secure: false
  //     }
  //   ]
  // },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  module: {
    preLoaders: [
      // {
      //   test: /\.vue$/,
      //   loader: 'eslint',
      //   exclude: /node_modules/
      // },
      // {
      //   test: /\.js$/,
      //   loader: 'eslint',
      //   exclude: /node_modules/
      // }
    ],
    loaders: [
      {
        test: require.resolve('jquery'),
        loader: 'expose?jQuery!expose?$'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: { presets: ['es2015'] }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      // {
      //   test: /\.(png|jpg|gif|svg)$/,
      //   loader: 'url',
      //   query: {
      //     limit: 10000,
      //     name: '[name].[ext]?[hash:7]'
      //   }
      // },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]?[hash]'
        }
      },
    ]
  },
  devtool: 'eval-source-map',
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin(),
  //     new webpack.ProvidePlugin({
  //         $: "jquery",
  //         jQuery: "jquery",
  //         "window.jQuery":"jQuery"
  //     })
  // ]
}
