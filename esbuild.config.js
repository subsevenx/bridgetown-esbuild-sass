const build = require("./config/esbuild.defaults.js")
const path = require("path")
const sassPlugin = require ("esbuild-sass-plugin").default
// Update this if you need to configure a destination folder other than `output`
const outputFolder = "output"

const esbuildOptions = {
    plugins: [sassPlugin()]
  }

build(outputFolder, esbuildOptions)
