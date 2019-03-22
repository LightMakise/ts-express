import http = require('http');
import { AbstractController, Restful, Router,ResponseBody,Autowire} from "ts-express-restful";
import BaseController from './base.controller';
import TestService from '../service/test.service';

@Restful('/test')
export default class TestController extends BaseController {
  @Autowire
  test!: TestService
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