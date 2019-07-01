const path = require("path");
const ENV = "development";

const commonConfig = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "[name].[chunkhash:8].js"
  },
  mode: ENV,
  module: {
    rules: [
      {
        test: /\.js$/,
        // We need to transpile Polymer,so whitelist packages containing ES modules
        exclude: /node_modules\/(?!(@webcomponents\/shadycss|lit-html|@polymer|@vaadin)\/).*/,
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: true,
              extends: path.join(__dirname + "/.babelrc"),
              cacheDirectory: true,
              envName: ENV
            }
          },
          {
            loader: "uglify-template-string-loader"
          }
        ]
      }
    ]
  }
};

module.exports = commonConfig;
