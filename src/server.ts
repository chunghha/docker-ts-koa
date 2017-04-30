import * as Koa from 'koa'
import * as logger from 'koa-logger'
import * as KR from 'koa-route'

const app = new Koa()
const res = {
  api: (ctx) => {
    ctx.body = 'Hello, api'
  },

  root: (ctx) => {
    ctx.body = 'Hello, World'
  },
}

app.use(logger())
app.use(KR.get('/', res.root))
app.use(KR.get('/api', res.api))

app.listen(8080)
