const path = require("path");
const { mainModule } = require("process");

module.exports = {
  mode: "development", //production OU development
  entry: {
    main: path.resolve(__dirname, "assets/js/app.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
};
