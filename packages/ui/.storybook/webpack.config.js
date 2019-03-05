const webpack = require('webpack');
const path = require("path");
const paths = require('../config/paths');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', paths.src],
    alias: {
      config: paths.appConfig,
      static: paths.publicFiles,
      public: paths.publicFiles,
    },
  },
  module: {
    rules: [
      // {
      //   test: /\.jsx?$/,
      //   exclude: /node_modules/,
      //   use: 'babel-loader',
      // },
      {
        test: /\.svg$/,
        exclude: [paths.publicFiles],
        loader: 'svg-sprite-loader',
      },
      {
        test: /\.css$/,
        sideEffects: true,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        sideEffects: true,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]-[hash:base64:5]',
            },
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [paths.scss],
            },
          },
        ],
      },
      {
        include: [paths.publicFiles],
        loader: 'file-loader',
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
