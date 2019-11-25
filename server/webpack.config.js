const path = require('path');

module.exports = {
  entry: './app.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.bundle.js'
  },
  target: 'node'
};