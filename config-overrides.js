const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');

// Get the environment from NODE_ENV
const env = dotenv.config({
  path: path.resolve(__dirname, `./environment/.env.${process.env.NODE_ENV}`),
}).parsed;

// Convert the env object to an object Webpack can inject
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  // Other configurations...

  plugins: [new webpack.DefinePlugin(envKeys)],
};
