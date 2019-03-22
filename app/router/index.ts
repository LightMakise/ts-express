import http = require('http');
import express = require('express');
import path = require("path");
import {AbstractController, Restful, Router,scannerDecoration,registerControllerToRouter} from "ts-express-restful";
var router = express.Router()
/**
 * 挂载所有的 controller
 */
scannerDecoration(path.join(__dirname,"../"))
/**
 * 注册路由
 */
registerControllerToRouter(router)
export default async function initHttp(app:any) {
  app.use('/api', router);
}