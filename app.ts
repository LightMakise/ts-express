import express = require('express');
import body_parser = require('body-parser');
import route from './app/router/index';
import { logger } from './app/log/index';
import { date } from './app/untils/index';
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
  console.log(`出错了~~~ ${err}`);
})
/**
 * 404 捕获
 */
app.get('*', function (req, res) {
  console.log('404 handler..')
});

app.listen(3000, function () {
  logger.info("*****************************************")
  logger.info("开启时间:", date.now('yyyy-mm-dd HH:ii:ss'))
  logger.info("*****************************************")
  console.log("项目运行于3000端口");
})