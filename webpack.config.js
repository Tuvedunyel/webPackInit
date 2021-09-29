const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", //production OU development
  entry: {
    main: path.resolve(__dirname, "assets/js/app.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  //loaders
  module: {
    rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }],
  },
  //plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: "Just a Demo",
      filename: "index.html",
      template: path.resolve(__dirname, "assets/temp.html"),
    }),
  ],
};
