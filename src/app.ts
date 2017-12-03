import * as koa from 'koa';
import * as logger from 'koa-logger';
import * as route from 'koa-route';

import * as api from './apis/api';
import * as root from './apis/root';

export class App {
  koa;

  constructor() {
    this.koa = new koa();
    this.setLogger();
    this.setRoutes();
  }

  private setLogger() {
    this.koa.use(logger());
  }

  private setRoutes() {
    this.koa.use(route.get('/', root.res.root));
    this.koa.use(route.get('/api', api.res.hello));
    this.koa.use(route.get('/echo/:echo', api.res.echo));
  }
}
