const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const PRODUCTION = false;

module.exports = {
  entry: path.resolve(__dirname, './scripts/main.js'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/bundle.js'
  },
  devtool : (PRODUCTION ? undefined : 'eval-source-map'),
  mode : PRODUCTION ? 'development' : 'production',
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "./index.html"
    }),

   new CopyPlugin({
    patterns: [
     
      {
        from: './images/*',
        to:  'images/[name].[ext]',
        noErrorOnMissing: true
      },
      {
        from: './style/*',
        to:  'style/[name].[ext]',
        noErrorOnMissing: true
      }, 
      {
        from: './assets/images/*',
        to:  'assets/images/[name].[ext]',
        noErrorOnMissing: true
      },
    ]
  },
 
  )],

  devServer: {
    static: {
       publicPath: path.resolve(__dirname, 'dist'),
       watch : true
    },

    host: 'localhost',
    port : 8888,
    open : 'firefox'
},

                            
  

  module: {
    rules : [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader'}
        ]
      },
      {
        test: /\.(png|jpg|gif)/i,
        use: [
          
          {
            loader: 'file-loader',
            options: {
            name : '[name].[ext]',
            outputPath : 'images'

            }
          }
        ]
      }
    ]
  },  
};   

