// module.exports = {
//   entry: './src/sys/js/index.js',
//   output: {
//     filename: './dist/sys.js'
//   },
//   module: {
//     loaders:[
//       { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}
//     ]
//   }
// };


var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/sys/js/index.js',
  output: {
    filename: './dist/sys.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],
  module: {
    loaders:[
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}
    ]
  }
};
