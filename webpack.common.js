const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // devtool: "none",
  entry: "./src/index.js",
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
};
