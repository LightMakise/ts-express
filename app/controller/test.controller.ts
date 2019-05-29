import http = require('http');
import { AbstractController, Restful, Router, ResponseBody, Autowire, PostMapping } from "ts-express-restful";
import BaseController from './base.controller';
import TestService from '../service/test.service';

@Restful
export default class TestController extends BaseController {
  @Autowire
  test!: TestService
  constructor() {
    super()
  }
  @PostMapping("/other")
  @ResponseBody()
  async other(ctx: any) {
    return this.reply(0, {

    })
  }
}