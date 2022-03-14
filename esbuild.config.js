const build = require("./config/esbuild.defaults.js")
const path = require("path")
const sassPlugin = require ("esbuild-sass-plugin").default
const postcss = require('postcss')
const autoprefixer = require('autoprefixer')
const postcssPresetEnv = require('postcss-preset-env')
// Update this if you need to configure a destination folder other than `output`
const outputFolder = "output"

const esbuildOptions = {
    plugins: [sassPlugin({
      async transform(source, resolveDir) {
        const {css} = await postcss([autoprefixer, postcssPresetEnv({stage: 0})]).process(source)
        return css
      }
    })]
  }

build(outputFolder, esbuildOptions)
