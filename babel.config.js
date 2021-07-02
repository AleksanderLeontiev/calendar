module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: "current",
      },
    ],
    "@babel/preset-typescript",
  ],
  env: {
    test: {
      plugins: ["@babel/plugin-transform-runtime"],
    },
  },
};