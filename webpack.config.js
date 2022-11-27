const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotEnv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');


const currentTask = process.env.npm_lifecycle_event;

const config = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    filename: 'bundle.[fullhash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html'}),
    new DotEnv({ systemvars: true }),
    new CopyPlugin({ patterns: [{ from: 'public' }] })
  ],
  devtool: 'inline-source-map',
  devServer: {
    port: 7890,
    static: path.resolve(__dirname, 'dist'),
    hot: true,
    open: true
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.(sc|c)ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpeg|jpg|png|svg|pdf)$/,
        use: {
          loader: 'file-loader?name=.public/assets/images/[name].[ext]'
        },
      }
    ]
  }
};

if (currentTask === 'build'){
  config.mode = 'production';
  config.plugins.push(
    new MiniCssExtractPlugin({ filename: 'main.[fullhash].css' }),
    new InjectManifest({
      swSrc: './src/serviceWorker/ServiceWorker.js',
      swDest: 'sw.js'
    })
  );
  config.module.rules[1].use[0] = MiniCssExtractPlugin.loader;
}

module.exports = config;
