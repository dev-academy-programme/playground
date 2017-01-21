const KoaRouter = require('koa-router')
const koaBody = require('koa-bodyparser')

const db = require('../db')
const check = require('../check')

const api = new KoaRouter({ prefix: '/api/v1' })
api.use(koaBody())

api.get('/tasks', ctx => {
  return db.getTasks()
    .then(rows => { ctx.body = rows })
    .catch(err => { ctx.body = err })
})

api.get('/tasks/:id', ctx => {
  return db.getTask(ctx.params.id)
    .then(rows => {
      ctx.assert(rows.length > 0, 404)
      ctx.body = rows[0]
    })
    .catch(err => { ctx.body = err })
})

api.post('/tasks/:id/check', ctx => {
  return db.getTask(ctx.params.id)
    .then(rows => {
      ctx.assert(rows.length > 0, 404)

      const task = rows[0]
      ctx.body = check(task.assertions[0].target, ctx.request.body.code, task.assertions)
    })
    .catch(err => { ctx.body = err })
})

module.exports = api
