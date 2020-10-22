const Koa = require('koa')
const app = new Koa()
const Config = require('./config/config');

// midleware
const serve = require('koa-static')
app.use(serve('./assets'))

app.listen(Config.node.port);

