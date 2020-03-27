const path = require("path")
module.exports = {
  mode: "production",
  // entry: "../index.js", // 单入口
  entry: {
    entry1: "../index1.js",
    entry2: "../index2.js"
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx", ".vue"],
    alias: {
      "@components": path.resolve(__dirname, "../../components")
    },
    mainFields: ["main", "browser"]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [

  ],

  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].bundle.js",
    chunkFilename: "[name].[chunkhash].bundle.js",
    publicPath: "/"
  }
}