const build = require("./config/esbuild.defaults.js")
const path = require("path")
const sassPlugin = require ("esbuild-sass-plugin").default
// Base plugins that ship with Bridgetown
const postCSS = require('postcss')([
  require('autoprefixer'),
  require('postcss-flexbugs-fixes'),
  require('postcss-preset-env')({
    autoprefixer: {
      flexbox: 'no-2009'
    },
    stage: 2
    }),
])
// Update this if you need to configure a destination folder other than `output`
const outputFolder = "output"

const esbuildOptions = {
  plugins: [sassPlugin({
    async transform(source) {
      const {css} = await postCSS.process(source, {from: undefined})
      return css
    }
  })]
  }

build(outputFolder, esbuildOptions)
