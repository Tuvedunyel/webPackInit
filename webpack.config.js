const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development", //production OU development
  entry: {
    main: path.resolve(__dirname, "assets/js/app.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: "[name][ext]",
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    port: 5000, //default 8080
    open: true,
    hot: true,
  },
  //loaders
  module: {
    rules: [
      //css
      {
        test: /\.(s[ac]|c|)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      //image
      { test: /\.(svg|ico|png|webp|gif|jpg|jpeg)$/, type: "asset/resource" },
      //Js for Babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  //plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: "Just a Demo",
      filename: "index.html",
      template: path.resolve(__dirname, "assets/temp.html"),
    }),
    new MiniCssExtractPlugin(),
  ],
};
