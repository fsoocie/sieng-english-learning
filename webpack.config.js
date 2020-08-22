const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd
const filename = ext => isProd? `bundle.[contenthash].${ext}`: `bundle.${ext}`
const jsLoaders = () => {
  const loaders = ['babel-loader']
  if (isDev) {
    loaders.push('eslint-loader')
  }
  return loaders
}

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist')
  },
  devtool: isDev? 'inline-source-map': 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    host: 'localhost',
    port: '1001'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@core': path.resolve(__dirname, 'src/core')
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhiteSpaces: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: filename('css')
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets'),
          to: path.resolve(__dirname, 'dist/assets')
        },
        {
          from: path.resolve(__dirname, 'src/favicon.ico'),
          to: path.resolve(__dirname, 'dist')
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders()
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev,
              reloadAll: isDev
            }
          },
          'css-loader',
          'sass-loader']
      },
      {
        test: /\.(svg|png|jpe?g|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/'
            }
          }
        ]
      }
    ]
  }
}
