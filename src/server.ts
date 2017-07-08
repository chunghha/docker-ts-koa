import * as Koa from 'koa'
import * as logger from 'koa-logger'
import * as route from 'koa-route'

import * as api from './apis/api'

const app = new Koa()

const res = {
  root: (ctx) => {
    ctx.body = 'Hello, World'
  },
}

app.use(logger())

app.use(route.get('/', res.root))
app.use(route.get('/api', api.res.hello))
app.use(route.get('/echo/:echo', api.res.echo))

app.listen(8080)
