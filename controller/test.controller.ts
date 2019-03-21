import http = require('http');
import { AbstractController, Restful, Router,ResponseBody,AutoInject} from "ts-express-restful";
import BaseController from './base.controller';
@Restful('/test')
export default class TestController extends BaseController {
  constructor() {
    super()
  }
  @Router("/other","POST")
  @ResponseBody()
  async other(ctx:any) {
    return this.reply(0,{
      ...this.params
    })
  }
}