const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  devServer: {
    publicPath: '/build/',
    port: 8080,
    compress: true,
    historyApiFallback: true,
    proxy: {
      '/offer': 'http://localhost:3000',
      '/user': 'http://localhost:3000',
    },
  },

  entry: path.resolve(__dirname, './client/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        // rule for babel-loader and jsx/react files
        // refer to this https://webpack.js.org/loaders/babel-loader/
        test: /\.jsx?/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/transform-async-to-generator',
            ],
          },
        },
      },
      {
        // rule for css
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
