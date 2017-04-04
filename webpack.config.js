const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
  },
  plugins: [new HtmlPlugin()],
}
