import * as Koa from 'koa'
import * as logger from 'koa-logger'

const app = new Koa()

app.use(logger())
app.use((ctx) => {
  ctx.body = 'Hello, World'
})

app.listen(8080)
