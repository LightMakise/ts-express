import * as mysql from "mysql"
import { resolve } from 'url';
import { rejects } from 'assert';
/**
 * mysql连接
 *
 * @export
 * @class mysqlDB
 */
export default class mysqlDB{
  private db:any
  constructor() {
    this.setConfig()
   
  }
  setConfig() {
    this.db = mysql.createConnection({
      host: '172.29.255.99',  // 数据库地址
      user: 'admin',          // 数据库名
      password: '123456',     // 数据库密码
      port: 3306,             // 端口号
      database: 'db'          // 使用数据库名字
    })
  }
  query(sql:string,arg?:any) {
    return new Promise((resolve,reject)=>{
      try{
        this.db.connect() // 链接数据库
        this.db.query(sql,arg,(err:any,data:any)=>{
          if(err){
            resolve(err)
          }else{
            resolve(data)
          }
        })
      }catch(e){
        console.log(e);
        resolve(e)
      }finally{
        this.db.end() //关闭
      }
    })
  }
}