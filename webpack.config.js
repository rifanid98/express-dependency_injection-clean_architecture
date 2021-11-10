// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodeExternals = require("webpack-node-externals");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const WebpackShellPluginNext = require("webpack-shell-plugin-next");

const { STAGE } = process.env;

module.exports = {
  entry: "./src/main.ts",
  mode: STAGE === "local" || STAGE === "development" ? "development" : STAGE,
  target: "node",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      },
    ],
  },
  externals: [nodeExternals()],
  watch: STAGE === "development" || STAGE === "local",
  // plugins: [
  //   new WebpackShellPluginNext({
  //     onAfterDone: {
  //       scripts: ["yarn start:local", "yarn start:dev"],
  //       blocking: true,
  //       parallel: false,
  //     },
  //   }),
  // ],
};
