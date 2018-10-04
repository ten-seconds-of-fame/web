var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var LiveReloadPlugin = require('webpack-livereload-plugin');
var autoprefixer = require('autoprefixer');

// changed from export default
module.exports = {
  mode:'development',
  module:{
    rules:[
      {
        use: 'babel-loader',
        test:/\.js$/,
        exclude:/node_modules/
      },
      {
        test:/\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader:"css-loader",
            options:{
              sourceMap: true,
              modules: false
            }
          },
          {
            loader:"postcss-loader",
            options:{
              autoprefixer:{
                browsers:["last 2 versions"]
              },
              plugins:()=>[autoprefixer]
            },
          },
          {
            loader:"sass-loader",
            options:{}
          }
        ]
        
      }
      // {
      //   test:/\.scss$/,
      //   use:[
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //     },
      //   {
      //     loader: "css-loader", options: {
      //       sourceMap: true
      //     }
      //   }, {
      //     loader: "sass-loader", options: {
      //       sourceMap: true
      //     }
      //   }
      // ]
      // }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    }),
    new MiniCssExtractPlugin({
      filename:"[name].css"
    }),
    new LiveReloadPlugin()
  ]
};