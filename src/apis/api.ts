export const res = {
  echo: (ctx, echo) => {
    ctx.body = `Hello, ${echo}`
  },

  hello: (ctx) => {
    ctx.body = 'Hello, api'
  },
}
