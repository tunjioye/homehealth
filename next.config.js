require('dotenv').config()
const withPlugins = require('next-compose-plugins')
const sass = require('@zeit/next-sass')
const css = require('@zeit/next-css')

module.exports = withPlugins([
  [sass],
  [css],
  [{
    env: {
      APP_ENV: process.env.APP_ENV,
    },
  }]
])
