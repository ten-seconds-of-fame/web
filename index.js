'use strict'
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from './webpack.client.js';

const app = express();
const PORT = process.env.PORT || 2333;
const NODE_ENV = process.env.NODE_ENV || 'development';

if(NODE_ENV === 'development'){
  app.use(webpackMiddleware(webpack(webpackConfig)));
}else{
  app.use(express.static('build'));
}

app.listen(2333, () => {
  console.log(`Listening on ${PORT} on ${NODE_ENV}`);
})