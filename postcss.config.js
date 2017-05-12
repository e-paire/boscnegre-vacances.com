const path = require("path")

module.exports = config => [
  require("stylelint")(),
  require("postcss-import")({
    path: path.resolve(__dirname, "src"),
  }),
  require("postcss-cssnext")(),
  require("postcss-reporter")(),
  ...!config.production ? [
    require("postcss-browser-reporter")(),
  ] : [],
]
