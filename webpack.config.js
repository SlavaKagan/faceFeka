const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const general = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      },

      {
        test: /\.(svg)$/,
        use: { loader: '@svgr/webpack' }
      },

      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            },
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js($|\?)/i,
        include: /\/includes/,
        exclude: /\/excludes/,
        cache: true,
        parallel: true,
        sourceMap: true
    } )]
  },

  performance: {
    hints: false
  },

  devServer: {
    historyApiFallback: true,
    contentBase: './',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 100
    },
    watch: true
  }
};

const config = {
  entry: {
    index: path.resolve(__dirname, './src/index.js'),
    sign: path.resolve(__dirname, './src/sign.js')
  },
  output: {
    path: path.resolve(__dirname),
    filename: './bundle/[name].bundle.js'
  }
};

module.exports = [Object.assign(config, general)];