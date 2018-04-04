module.exports = {
  module: {
    rules: [
      { // SCSS
        test: /\.scss$|css$/,
        use: [
          { loader: 'css-loader', options: { importLoader: 1, modules: true, localIdentName: '[path]___[name]__[local]___[hash:base64:5]' } },
          { loader: 'sass-loader', options: { sourceMap: false } }
        ]
      },
      { // JavaScript
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' }
        ]
      }
    ]
  }
};
