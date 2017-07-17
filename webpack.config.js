const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let devtool;
if ('PRO' === process.env.RUN_ENV) {
  devtool = 'source-map';
} else {
  console.log('You are in development environment now.');
  devtool = 'eval';
}

module.exports = {
  entry: {
    'index': './example/index.js',
    'vendor': './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    sourceMapFilename: '[name].js.map'
  },
  devtool: devtool,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|ref|dist)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "env",
                {
                  "targets": {
                    "browsers": ["last 2 versions", "ie >= 9"]
                  }
                }
              ]
            ]
          }
        }
      }, {
        test: /\.js$/,
        enforce: "pre",
        exclude: /(node_modules|ref|dist)/,
        loader: "eslint-loader",
        options: {
          // eslint options (if necessary)
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './example/index.html'
    })
  ]
};