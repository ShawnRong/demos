const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//minimize js file
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


module.exports = {
  context: path.resolve(process.cwd(), "js"),
  entry: {
    app: "./app.js"
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '.',
    port: 1024,
    compress: true
  },
  // watch: true,
  output: {
    publicPath: '/dist',
    path: path.resolve(process.cwd(), "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              // use: "css-loader"
              //compress css
              use: { loader: 'css-loader', options: { minimize: true } }
          })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'less-loader']
          })
      },
      {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [['env', {modules: false}]],
              //   plugins: ['transform-class-properties'],
                plugins: ["transform-object-rest-spread"]
              }
            }
          ],
      },
      {
          test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
          use: [
              {
                loader: 'file-loader',
                options: {
                  name: 'assets/[name]_[sha512:hash:base64:7].[ext]'
                },
              }
          ]
      },
      {
          test: /\.(csv|tsv)$/,
          use: [
              'csv-loader'
          ]
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].bundle.css',
      allChunks: true,
    }),
    new UglifyJsPlugin(),
  ]
}