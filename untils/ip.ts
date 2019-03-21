/***
 * @author zhang
 * @date 2019/2/20
 * @Description: ip处理
 */
export default class IP{
  constructor() {

  }
  /**
   * 序列化ip地址
   * @param ip 
   */
  serialization(ip:string):string {
    return ip.replace(/(:)/g,'').replace(/f+/,'')
  }
} 