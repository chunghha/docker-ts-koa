import {App} from './app';

const app = new App().koa;
const port = process.env.PORT || 8080;

app.listen(port);
