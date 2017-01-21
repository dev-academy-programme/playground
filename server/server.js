const Koa = require('koa')
const koaStatic = require('koa-static')

const api = require('./api')

const app = new Koa()
const PORT = 3000

app.use(koaStatic('public'))
app.use(api.routes())
app.use(api.allowedMethods())

app.listen(PORT)
