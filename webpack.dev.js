const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  // devtool: "none",
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // These loaders needs to be reversed in a correct order to work (see comments 1,2,3 below);
          "style-loader", //3 injects styles into DOM;
          "css-loader", //2 Turns css into commonjs;
          "sass-loader" //1 Turns sass into css;
        ]
      }
    ]
  }
});
