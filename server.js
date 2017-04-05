const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const WebpackConfig = require('./webpack.config')
const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()
const compiler = webpack(WebpackConfig)
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const jsonParser = bodyParser.json();

app.post('/validate',jsonParser,routes.main)
app.post('/code',jsonParser,routes.code)
app.post('/changePwd',jsonParser,routes.reset)


app.use(webpackDevMiddleware(compiler, {
  publicPath: '/_build/',
  stats: {
    colors: true,
    chunks: false
  }
}))

app.use(webpackHotMiddleware(compiler))

app.use(express.static(__dirname + '/views'))

const port = process.env.PORT || 8080
module.exports = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`)
})
