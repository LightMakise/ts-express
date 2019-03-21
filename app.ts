import express = require('express');
import body_parser = require('body-parser');
import route from './router/index';
import * as logger from './log/index';
const app: express.Application = express()
/**
 * post参数解析
 */
app.use(body_parser.json())
/**
 * 路由挂载
 */
route(app)
/**
 * 异常捕获
 */
app.use(function (err: any, req: any, res: any, next: any) {
  console.log(`${err}`);
})
/**
 * 404 捕获
 */
app.get('*', function (req, res) {
  console.log('404 handler..')
});

app.listen(3000, function () {
  console.log("项目运行于3000端口");
})