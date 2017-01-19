const Koa = require('koa')
const KoaRouter = require('koa-router')
const koaBody = require('koa-bodyparser')
const koaStatic = require('koa-static')

const config = require('./knexfile')[process.env.NODE_ENV || 'development']
const connection = require('knex')(config)

const app = new Koa()
const api = new KoaRouter({ prefix: '/api/v1' })
const PORT = 3000

app.use(koaBody())
app.use(koaStatic('public'))

api.get('/tasks', ctx => {
  ctx.body = [
    {
      id: 0,
      description: 'Create an object literal like this: `{}`',
      instructions: {
        head: 'Empty object literal',
        subhead: 'Creating blank objects: sound simple?',
        body: 'Assign an empty object literal to a variable named `obj`.'
      }
    }
  ]
})

api.post('/tasks/:id/check', ctx => {
  ctx.body = {
    correct: true
  }
})

app.use(api.routes())
app.use(api.allowedMethods())

app.listen(PORT)
