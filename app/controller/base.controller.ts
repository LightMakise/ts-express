import { AbstractController, Restful, Router} from "ts-express-restful";
import {logger} from '../log/index';
import {Logger} from 'log4js';
import {ip,date} from '../untils/index';
export default class BaseController extends AbstractController{
  public SUCCESS = '200'
  public FAIL = '0'
  public params:any = {} // 参数
  public reply:any = this.ResponseBody //  返回值
  public logger:Logger = logger // 日志打印
  constructor() {
    super()
  }
  /**
   * 路由钩子
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @memberof BaseController
   */
  async $before(req:any, res:any, next:any) {
    // 处理请求参数 挂到 params
    if(req.method === "POST"){
      this.params = req.body
    }
    if(req.method === "GET"){
      this.params = req.query
    }
    this.saveLog(req)
    next(); //切记需要调用next，否则就停止到这里了
    
  }
  /**
   * 保存日志
   * @param req 
   */
  saveLog(req:any) {
    this.logger.info("------------------------------------------------")
    this.logger.info("请求时间:",date.now('yyyy-mm-dd HH:ii:ss'))
    this.logger.info("请求地址:",req.baseUrl+req.url)
    this.logger.info("请求参数:",this.params)
    this.logger.info("请求ip:",ip.serialization(req.ip))
  }
  log(info: string) {
    this.logger.info(info)
    console.log('[' + date.now('yyyy-mm-dd HH:ii:ss') + ']信息:', info)
  } 
  $isValidId(id: string) {
    //只有ID是数字是才认为是ID 如 /test/1 可以请求到get  /test/xx 为返回404  /test/other 为映射到 other函数
    return /^\d+$/.test(id);
  }
  ResponseBody(code:Number,data:any,msg?:string) {
    return {code,data,msg}
  }
}