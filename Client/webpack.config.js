const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: './index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  stats: 'minimal',
  target: 'web',
  devServer: {
    port: '5000',
    static: {
      directory: path.resolve(__dirname, 'public'),
    },

    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    // alias: {
    //   three$: path.resolve('./three-exports.js'),
    // },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },

      // {
      //   test: /\.(png|svg|jpeg|gif|gltf)$/i,
      //   type: 'asset/resource',
      // },
      {
        test: /\.(gltf|bin|glb|png|jpeg|mp3|ico)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
    //Show Bundle Size//
    // new BundleAnalyzerPlugin({}),
  ],
};
