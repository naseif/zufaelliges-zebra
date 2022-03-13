const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "source-backend"),
  devtool: "inline-source-map",
  entry: "./zufaelliges-zebra.bl.ts",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: "zufaelliges-zebra.bl.js",
    path: path.resolve(__dirname, "dist/"),
  },
  resolve: {
    extensions: [".ts"],
  },
};
