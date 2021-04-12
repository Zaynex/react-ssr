import fs from 'fs';
import Koa from "koa";
import Router from "@koa/router";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from '../src/App';
import path from 'path';
const router = new Router();
const app = new Koa();
const serve = require('koa-static');

// app.use(serve(__dirname + '/dist'));

router.get('/', async (ctx, next) => {
  const renderedString = ReactDOMServer.renderToString(
    <StaticRouter><App/></StaticRouter>
  )
  const data = fs.readFileSync(path.resolve('dist/index.html'), 'utf8');
  console.log(data);
  ctx.body = data.replace('<div id="root"></div>', `<div id="root">${renderedString}</div>`);
})

router.get('/dist/main.js', async (ctx, next) => {
  ctx.body = fs.readFileSync(path.resolve('dist/main.js'));
})
app.use(router.routes());

app.listen(3000);
