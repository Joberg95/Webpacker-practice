const path = require("path");
module.exports = {
  mode: "development",
  // devtool: "none",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
        // These loaders needs to be reversed in a correct order to work (see comments 1,2,3 below);
        "style-loader",  //3 injects styles into DOM;
        "css-loader",    //2 Turns css into commonjs;
        "sass-loader"    //1 Turns sass into css;
        ]
      }
    ]
  }
};
