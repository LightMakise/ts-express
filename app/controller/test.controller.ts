import { get, post } from '../http/index';
import qs = require('querystring');
import { AbstractController, Restful, Router, ResponseBody, Autowire, PostMapping, GetMapping } from "ts-express-restful";
import BaseController from './base.controller';
import TestService from '../service/test.service';

@Restful
export default class TestController extends BaseController {
  @Autowire
  test!: TestService
  constructor() {
    super()
  }
  @GetMapping("/other")
  @ResponseBody()
  async other(ctx: any) {
    try {
      this.log("开始请求数据")
      this.log("请求接口:" + '/obt/wxobt/api/admin/agentinfo')
      let data = await get('/obt/wxobt/api/admin/agentinfo')
      this.log("请求数据:" + JSON.stringify(data))
      return this.reply(this.SUCCESS, data)
    } catch (e) {
      return this.reply(this.FAIL, e)
    }
  }
  @PostMapping('/getToken')
  @ResponseBody()
  async getToken(ctx: any) {
    try {
      this.log("开始请求数据")
      this.log("请求接口:" + '/blueskydc/uat/obt/api/admin/oa/login/getToken')
      let data = await post('/obt/wxobt/api/admin/oa/login/getToken', {
        "appKey": "SINOCHEMTEST_H5",
        "appSecurity": "SINOCHEMTEST20190611"
      })
      this.log(`请求完成 获取数据:`)
      this.log(`${JSON.stringify(data)}`)
      return this.reply(this.SUCCESS, data)
    } catch (e) {
      return this.reply(this.FAIL, e)
    }
  }
}