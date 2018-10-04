const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  entry:[
    './client/index.js'
  ],
  output:{
    filename:'client.bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  plugins:[]
}

module.exports = merge(baseConfig, config);