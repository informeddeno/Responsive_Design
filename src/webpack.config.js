module.exports = {
  // ...other config
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      // ...other rules
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
