const path = require("path");

const distPath = path.resolve(__dirname, "dist");

const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  mode: "development",

  entry: "./src/index.ts",
  output: {
    path: distPath,
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new ESLintPlugin({
      extensions: [".ts", ".js"],
      exclude: "node_modules",
    }),
  ],
  devServer: {
    port: "3000",
    hot: true,
    open: true,
    static: distPath,
  },
};
